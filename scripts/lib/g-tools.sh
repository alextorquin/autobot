repo_name=$1
user_dir=$(pwd)
cd $user_dir/$repo_name
echo "Generating Tools"
ng g m core --spec false
ng g s core/store --spec false
ng g m shared --spec false
ng g c shared/widgets/card --export --spec false -s
