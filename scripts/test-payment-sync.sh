#!/bin/bash
# Quick test script - replace EMAIL with the email you used for test payment

EMAIL="test@example.com"  # Replace with your test email

echo "🔍 Testing Payment Sync for: $EMAIL"
echo ""

node scripts/verify-user-status.js "$EMAIL"

echo ""
echo "💡 If payment_status is 'Paid', the sync worked!"
echo "💡 If it's 'NOT SET' or 'free', check webhook logs in Stripe Dashboard"



