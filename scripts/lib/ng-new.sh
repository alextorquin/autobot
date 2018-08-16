script_dir=$(dirname "$0")
repo_name=$1
user_dir=$(pwd)
echo "Initializing at $user_dir"
rm -rf ./$repo_name
echo "Generating $repo_name"
ng new $repo_name --routing -s -S --skip-install
repo_dir=$user_dir/$repo_name
echo "Repo dir $repo_dir"
echo "Configuring prettier"
cp $script_dir/../temp/prettier.config.js $repo_dir/prettier.config.js
cp $script_dir/../temp/tslint.json $repo_dir/tslint.json
echo "Configuring npm scripts" 
sed -i -e 's/ng serve/ng serve -o/g' $repo_dir/package.json
sed -i -e 's/ng build/ng build --prod/g' $repo_dir/package.json
sed -i -e 's/ng build/ng build --prod/g' $repo_dir/package.json

