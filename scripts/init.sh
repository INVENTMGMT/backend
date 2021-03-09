echo "Initializing local dynamodb tables and populating with demo data.."
echo " "
echo " "
scripts/create-table.sh
echo " "
echo " "
scripts/ttable.sh
echo " "
echo " "
scripts/populate-table.sh
echo " "
echo " "
echo "Great Success!"
echo " "
