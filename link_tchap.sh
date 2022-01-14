cd ../matrix-js-sdk
yarn unlink
yarn link

cd ../matrix-react-sdk-v3
yarn link matrix-js-sdk
yarn unlink
yarn link

cd ../tchap-web-v3
yarn link matrix-js-sdk
yarn link matrix-react-sdk

# Display result
echo -e "\nYarn links in this dir:";
ls -l node_modules/ | egrep "^l";
echo -e "\nExisting yarn links:";
ls -l ~/.config/yarn/link
