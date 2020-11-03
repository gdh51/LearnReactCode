# React 学习

## 从零开始

由于笔者学习框架是先从`Vue`开始的，先入为主的会代入些其的影子。从先过了一遍教程与概念文档来说，`React`和`Vue3.0`的语法非常类似(`React`先于`Vue`)，所以上手并不困难。简单了解完了上述的基本概念后基本上就可以开发一些简单的应用了，比如教程中的一些例子。那么该文主要对我在其中的一些生疏的点的记录 📝。

## 区别点记录

### 函数式组件

在`React`中，函数式组件指直接通过函数定义的`render()`函数，它们不会生成实例。即仅通过`Class`定义的组件才会生成实例。

在这种情况下，我们不能对函数式组件使用`ref`属性，但是我们可以通过`forwardRef()`来对其进行穿透使用，将`ref`定义到其内部的真实元素上。(当然我们还是可以在函数式组件内定义`ref`)

```js
// 函数式组件
function CustComponent() {
    const ref = React.createRef()

    // 可以这么使用 √
    return <input ref={ref} />
}

class Parent extends React.Component {
    constructor() {
        // ...
        this.input = React.createRef()
    }

    render() {
        // 不能这么使用
        return <CustComponent ref={this.input} />
    }
}
```

### Ref 透传警告 ⚠️

当你想将`ref`作为`props`进行传递时需要注意，该属性有别于`props`，会被特殊进行处理，不会作为`props`继续向下进行传递。所以我们需要通过`forwardRef()`来进行特殊处理来获取内部的`ref`。或则我们通过函数形式来获取组件内部的`ref`：

```js
// 通过函数形式获取
function CustomInput(props) {
    return (
        <div>
            <input ref={props.inputRef} />
        </div>
    )
}

class Parent extends React.Component {

    // 这样inputElement上就获取到了对应元素的引用
    render() {
        return (
            <CustomInput inputRef={el => this.inputElement = el}>
        )
    }
}
```
