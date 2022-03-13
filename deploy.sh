#!/bin/bash

source=../../public/resume
# 发生错误时终止
set -e

# 构建
npm run build

if [ -d $source ]; then
    rm -r $source
fi	
# 进入构建文件夹
cp -r dist $source