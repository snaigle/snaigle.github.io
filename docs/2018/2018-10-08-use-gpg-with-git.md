---
title: 使用gpg签名git中的commit
date: '2018-10-08 11:23:00'
description: 使用gpg签名，让commit更安全
---

### 使用gpg来签名commit
> 以下以mac平台为例说明

* 安装gnu-suite , ```brew install gpg```
* 生成密钥 ```gpg --gen-key``` ，输入名称、邮箱等信息
* 显示生成的密钥 ```gpg --list-secret-keys --keyid-format LONG```
  ```
    sec   rsa2048/98A8D73449878FED 2018-10-08 [SC] [expires: 2020-10-07]
      08FDCA340E820D3FBB207A7598A8D73449878FED
    uid                 [ultimate] demo <demo@126.com>
    ssb   rsa2048/34ED32BF8596D3FC 2018-10-08 [E] [expires: 2020-10-07]
  ```
  ```98A8D73449878FED``` 为密钥id
* ```gpg --armor --output pubkey.txt --export 98A8D73449878FED``` 导出公钥，并将公钥内容添加到github中
* 在本地项目下, 执行 
  ```
    git config commit.gpgsign true
    git config user.signingkey 98A8D73449878FED
  ```
* 正常提交commit 即可，push后在github上即可看到 ```verified``` 标识


