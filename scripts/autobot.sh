script_dir=$(dirname "$0")
user_dir=$(pwd)
echo "---> Repo will be created at $user_dir"
repo_name='autobot'
repo_dir=$user_dir/$repo_name
echo "---> Cleaning $repo_dir"
rm -rf $repo_dir
echo "---> Generating $repo_name"
ng new $repo_name -s -S -t
echo "---> Created Repo at $repo_dir"
echo "---> Configuring prettier"
cp $script_dir/temp/prettier.config.js $repo_dir/prettier.config.js
cp $script_dir/temp/tslint.json $repo_dir/tslint.json
echo "---> Configuring npm scripts" 
sed -i -e 's/ng serve/ng serve -o/g' $repo_dir/package.json
sed -i -e 's/ng build/ng build --prod/g' $repo_dir/package.json
sed -i -e 's/ng build/ng build --prod/g' $repo_dir/package.json
echo "---> Installing npm dependecies" 
cd $repo_dir
npm i bulma font-awesome moment
npm i compodoc -g 
npm i webpack-bundle-analyzer -D
cd $user_dir
echo "---> Generating Git Hub Repository
$script_dir/lib/git.sh $repo_name 
echo "---> Opening"
code $repo_dir
cd $repo_dir
