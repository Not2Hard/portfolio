npm run now-build
aws s3 sync ./dist s3://sergeeva.us/ --delete --acl public-read --profile=MY_ACCOUNT
