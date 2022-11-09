# 如何为Akashic-frontend添砖加瓦

首先我们要感谢你的热情参与！

不过，在你开始为Akashic-frontend子项目贡献自己的力量前，不妨先阅读一下我们Akashic平台总项目的[贡献指南](https://github.com/CSU-OSA/Akashic/blob/master/doc/CONTRIBUTING.md)

## 准备开发环境

1. 准备一个你喜欢的IDE，比如 VS Code / WebStorm 或者其它IDE

2. Clone本仓库：
   ```shell
   # https 
   git clone https://github.com/CSU-OSA/Akashic-frontend.git
   # ssh
   git clone git@github.com:CSU-OSA/Akashic-frontend.git
   ```

3. 进入仓库目录

4. 安装开发依赖：（项目使用pnpm管理依赖项，如果没有pnpm，请先安装它）

   ```shell
   pnpm i
   ```
5. 开始开发吧！ 

哦，不要忘了在你的IDE中安装 `eslint` 和 `prettier`~ 它们可以辅助你写出 _Nice and Clean_ 的代码

## 项目结构

- `config` 包含网站各类配置文件
  - `theme` 包含主题配色配置文件 
- `doc` 包含各类项目文档
- `src` 包含项目资源和源代码
  - `components` 包含应用程序内部使用的各种组件
  - `domain` 包含各种公共接口/类型
  - `router` 包含路由文件 index.tsx
  - `views` 包含各页面的基础框架
  - `store` 包含各种页面状态/资源存储库

## 向我们报告问题

在此仓库中反馈的Bug应当是 _由仓库中的代码引起的**可稳定复现**的问题_。
一个好的Bug反馈将对我们的开发有莫大的帮助！感谢~


Bug反馈指南:

1. **使用 GitHub issue搜索** &mdash; 检索该 issue 是否已经由其他人提出过了

2. **检查该issue是否已被解决了** &mdash; 尝试使用存储库中最新的`master`或`dev`分支，看看问题是否会复现。

3. **定位问题（可选）** &mdash; 创建一个[简化的测试用例](http://css-tricks.com/reduced-test-cases/)和一个的例子

4. **添加附件** &mdash; 添加截图/视频

一个好的Bug反馈不应该让其他人追问你去获得更多内容。请尽量在你的反馈中详细说明：你的运行环境是什么？哪些操作将复现该问题？使用什么浏览器和操作系统会遇到问题？你所期望的结果是什么？所有的这些详细信息都将帮助我们修复那些可能存在的Bug。

**例：**

```
**环境:**
设备 & OS:
浏览器:
复现概率: （小/中/大/稳定）
**复现步骤:**
1.
2.
3.
**预期结果:**
```

再强调一遍：**一个好的Bug反馈不应该让其他人追问你去获得更多内容。**