#!/bin/sh

# set tracing env var to true for more verbosity - set by martin caarels oct 5 2017
set
echo "api:  $api \n usename: $username \t org:  $organization \n space:  $space"
cf login -a $api -u $username -p $password -o $organization -s $space &&\
cd ./resource-git/ &&\
cf push -f $manifest
