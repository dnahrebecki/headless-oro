# Oro Tech Talks #2
## Headless eCommerce and OroCommerce

Simple application build in ReactJS and Next.js that connects to an OroCommerce backend.
PoC created for the Oro Tech Talks #2

### Use cases
1. Landing Page - Content Editors use external tool for synchronizing pages to ORO and data is
   available via LandingPage API for buyers.
2. Barcode Scan - Grocery shops use barcode scanning app to scan products and automatically
   purchase them in recurring orders.
3. Profile - Buyers are able to view and edit their profiles. We'll learn here how to use customer user context in API.
4. PageModel API - Learn how to facilitate custom API models to build endpoints exposing all the needed information for a page.

### Installation

In order to setup a connection between OroCommerce and this next.js application, we need to configure the instance first.
Please follow the instructions below.

Clone the repository:
1. `cd NEXTJS_DIR`
2. `git clone https://github.com/dnahrebecki/headless-oro`

#### OroCommerce

This section is about configuring your OroCommerce instance.

1. Generate public & private keys: https://doc.oroinc.com/bundles/platform/OAuth2ServerBundle/#bundle-docs-platform-oauth2-server-bundle
   - `cd OROCOMMERCE_INSTANCE_DIR/var`
   - `openssl genrsa -out oauth_private.key 2048`
   - `openssl rsa -in oauth_private.key -pubout -out oauth_public.key`
   - `chmod 644 oauth_private.key oauth_public.key`
2. Open OroCommerce, go to System -> Storefront oAuth2 Applications
3. Create **Storefront oAuth2 Application**, Password Grant Type
   - https://doc.oroinc.com/api/authentication/oauth-password/
4. Copy client id & client secret
5. Copy the whole content of `oro/` directory to the `src/` directory of your OroCommerce project
6. Clear cache (`bin/console cache:clear --env=prod`)

#### Next.js app

1. `cd NEXTJS_DIR`
2. `npm install`
3. `npm run dev`
4. Open `config/configuration.json` and provide your own config:
   - BASE_API_URL - url of your OroCommerce instance
   - CLIENT_ID & CLIENT_SECRET - data from OroCommerce Storefront oAuth2 Application

![Headless ORO homepage](/public/headless-home.png)

If you have questions, contact me at: 
- dnahrebecki@oroinc.com
- https://www.linkedin.com/in/daniel-nahrebecki-b86aa98a