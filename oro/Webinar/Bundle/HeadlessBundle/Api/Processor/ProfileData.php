<?php

namespace Webinar\Bundle\HeadlessBundle\Api\Processor;

use Oro\Bundle\ApiBundle\Processor\Create\CreateContext;
use Oro\Bundle\CustomerBundle\Entity\CustomerUser;
use Oro\Bundle\EntityBundle\ORM\DoctrineHelper;
use Oro\Bundle\OrderBundle\Entity\Order;
use Oro\Bundle\ProductBundle\Entity\Product;
use Oro\Bundle\SecurityBundle\Authentication\TokenAccessor;
use Oro\Bundle\SecurityBundle\ORM\Walker\AclHelper;
use Oro\Component\ChainProcessor\ContextInterface;
use Oro\Component\ChainProcessor\ProcessorInterface;
use Webinar\Bundle\HeadlessBundle\Model\Profile;

class ProfileData implements ProcessorInterface
{
    private DoctrineHelper $doctrineHelper;
    private AclHelper $aclHelper;
    private TokenAccessor $tokenAccessor;

    public function __construct(DoctrineHelper $doctrineHelper, AclHelper $aclHelper, TokenAccessor $tokenAccessor)
    {
        $this->doctrineHelper = $doctrineHelper;
        $this->aclHelper = $aclHelper;
        $this->tokenAccessor = $tokenAccessor;
    }

    /**
     * @param CreateContext $context
     *
     * {@inheritdoc}
     */
    public function process(ContextInterface $context)
    {
        $stats = new Profile();
        $stats->ordersNumber = $this->getOrdersNumber();
        $stats->ordersRevenue = $this->getOrdersTotal();
        $stats->productsNumber = $this->getProductsNumber();

        $user = $this->tokenAccessor->getUser();
        if ($user instanceof CustomerUser) {
            $stats->userId = $user->getId();
            $stats->userFirstName = $user->getFirstName();
            $stats->userLastName = $user->getLastName();
            $stats->userEmail = $user->getEmail();
            $stats->userCustomerName = $user->getCustomer()->getName();
        }

        $context->setResult([
            $stats
        ]);
    }

    private function getProductsNumber()
    {
        $qb = $this->doctrineHelper->getEntityManager(Product::class)->createQueryBuilder();

        $qb
            ->select('COUNT(p.id)')
            ->from(Product::class, 'p');

        return $this->aclHelper->apply($qb)->getSingleScalarResult();
    }

    private function getOrdersNumber()
    {
        $qb = $this->doctrineHelper->getEntityManager(Order::class)->createQueryBuilder();

        $qb
            ->select('COUNT(o.id)')
            ->from(Order::class, 'o');

        return $this->aclHelper->apply($qb)->getSingleScalarResult();
    }

    private function getOrdersTotal()
    {
        $qb = $this->doctrineHelper->getEntityManager(Order::class)->createQueryBuilder();

        $qb
            ->select('SUM(o.totalValue)')
            ->from(Order::class, 'o');

        return number_format($this->aclHelper->apply($qb)->getSingleScalarResult(), 2);
    }
}
