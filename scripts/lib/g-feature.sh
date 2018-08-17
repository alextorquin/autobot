repo_name=$1
feature_name=$2
user_dir=$(pwd)
cd $user_dir/$repo_name
echo "Generating Feature $feature_name"
ng g m $feature_name --routing --spec false
ng g c $feature_name/$feature_name --spec false -s
