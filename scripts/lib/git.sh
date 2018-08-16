user_dir=$(pwd)
repo_name=$1
echo "Generating Repository $repo_name"
cd $user_dir/$repo_name
curl -u 'albertobasalo'  https://api.github.com/orgs/AcademiaBinaria/repos -d "{\"name\":\"$repo_name\"}"
echo "initial commit $repo_name"
git add .
git commit -m "initial commit"
echo "initial push $repo_name"
git remote add origin https://github.com/AcademiaBinaria/$repo_name.git
git push -f origin master
git push -u origin master