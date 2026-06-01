@echo off
echo Starting Portsmouth Driving School dev server...
set DATABASE_URL=file:./prisma/dev.db
set NEXTAUTH_URL=http://localhost:3000
set NEXTAUTH_SECRET=dev-secret-key-replace-before-production
set STRIPE_SECRET_KEY=sk_test_replace_with_real_key
set STRIPE_PRICE_ID=price_replace_with_real_price_id
set STRIPE_WEBHOOK_SECRET=whsec_replace_with_real_webhook_secret
npm run dev
