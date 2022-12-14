# vscode-self-custom-ext
vscode 自定义扩展


## 为什么会有 `vscode` 自定义扩展?
- 最开始期望的`vim`全键盘操作，其实在 `vscode` 中是可以被满足的。
- vim 中的快捷键学习熟练操作，可以用在 `vscode` 中自定义配置，可以较为平滑的过渡(哪里不顺改哪里，没改也有鼠标方案先用，不用在 vim 中很难用)。
- `vscode` 中的部分操作，比如文件管理器不便与全键盘操作：这个部分也有人写好了扩展可以替代解决:`advanced-new-file`,`Thadeu.vscode-run-rspec-file`,`MadaraUchiha.file-navigator,Shawn.file-name-search,bnason-nf.findallinfile`。
- `vscode` 中键位配置很麻烦：一方面有一些扩展已经写好了配置方案，类似 `VSpaceCode`，另一方面只用配置一次，配置比 vim 简单。
- `vscode` 的界面布局不够简洁：一方面可以使用诸如`Night Owl` 的主题插件去掉不必要的线条，另一方面，可以通过各种键位绑定将不需要的侧边栏都隐藏起来，使用时才用快捷键显示。
- `vscode` 的远程编辑也已经媲美了 `vim` 在服务器中在线编辑的优势。
- `vscode` 生态丰富，社区力量强大，有需求时基本是第一时间有资源，这比 `vim` 更活跃。
- `vscode` 有很多开箱即用的特性，比如 golang 基本不需要配置就已经媲美 IDE 了，自动提示，自动完成，自动格式化，自动导入等操作顺滑。而 vim 除了必须手动配置外，还需要手动出发这些操作。

> 所有 vim 更好的思路，vscode 都可以完成。
> 如果没有既有插件，或者既有插件不满意，可以自己编写插件完成。

## 使用 VSpaceCode
- 在尽可能的干净的 vscode 的环境中`Ctrl+P` 打开命令框 直接安装 `ext install VSpaceCode.vspacecode`，会自动安装依赖的所有插件。

## 结语
我们并不是只能从既有的方案中按照既有的思路去选择，我们可以从自己的根本需要出发，集众家之所长。
