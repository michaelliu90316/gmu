/**
 * @file
 * @name Core
 * @desc
 */

/**
 * @grammar $(selector, [context])  ⇒ collection
 * @grammar $(<Zepto collection>)  ⇒ same collection
 * @grammar $(<DOM nodes>)  ⇒ collection
 * @grammar $(htmlString)  ⇒ collection
 * @_grammar $(htmlString, attributes)  ⇒ collection v1.0+
 * @grammar Zepto(function($){ ... })
 * @name $()
 * @desc 可使用CSS选择器，DOM节点或HTML字符串来建立Zepto集合对象。
 * Zepto集合是类似数组的对象集合，并采用链式调用的方法操作DOM元素。
 * 如果已经给出了上下文（CSS选择器，DOM节点或者Zepto集合对象），则CSS选择器的范围就在给出的上下文中。如同调用了***$(context).find(selector)***
 * 当参数为HTML字符串时，$用来创建DOM元素。
 * 当参数为方法时，将其作为句柄添加到***DOMContentLoaded***事件中。页面加载完成后，立即执行。
 * @example $('div')  //=> all DIV elements on the page
 *    // 创建元素
 *    $("<p>Hello</p>") //=> the new P element
 *    // 创建元素和属性
 *    $("<p />", { text:"Hello", id:"greeting", css:{color:'darkblue'} })
 *    //=> <p id=greeting style="color:darkblue">Hello</p>
 *
 *    // 页面加载完成后执行函数
 *    Zepto(function($){
 *      alert('Ready to Zepto!')
 *    })
 */

/**
 * @ignore
 * @grammar $.camelCase(string)  ⇒ string
 * @name $.camelCase v1.0+
 * @desc 将带有破折号的字符串转成“驼峰式”。不影响已经是驼峰式的字符串。
 * @example $.camelCase('hello-there') //=> "helloThere"
 * $.camelCase('helloThere')  //=> "helloThere"
 */

/**
 * @ignore
 * @grammar $.contains(parent, node)  ⇒ boolean
 * @name $.contains     v1.0+
 * @desc 检查父节点是否包含第二个参数中的DOM节点。若两者为同一个元素也返回false。
 *
 */

/**
 * @grammar $.each(collection, function(index, item){ ... })  ⇒ collection
 * @name $.each
 * @desc 遍历数组中每个元素或键值对象， 当遍历函数返回***false***时，遍历停止。
 * @example $.each(['a', 'b', 'c'], function(index, item){
 *     console.log('item %d is: %s', index, item)
 * })
 *
 * var hash = { name: 'zepto.js', size: 'micro' }
 *     $.each(hash, function(key, value){
 *     console.log('%s: %s', key, value)
 * })
 */

/**
 * @grammar $.extend(target, [source, [source2, ...]])  ⇒ target
 * @_grammar $.extend(true, target, [source, ...])  ⇒ target v1.0+
 * @name $.extend
 * @desc 每个源对象的属性用来扩展目标对象，并重写目标对象的属性。
 * @_desc 默认为浅拷贝，第一个参数（可选）设置为***ture***可以触发深拷贝。
 * @example var target = { one: 'patridge' },
 *    source = { two: 'turtle doves' }
 *
 *    $.extend(target, source)
 *    //=> { one: 'patridge',
 *    //     two: 'turtle doves' }
 */

/**
 * @name $.fn
 * @desc ***Zepto.fn***是一个包含了Zepto所有可用方法的集合，例如***addClass()***, ***attr()***以及其他。在这个对象上添加函数可以让每个Zepto集合都可以使用。
 * @example $.fn.empty = function(){
 *     return this.each(function(){ this.innerHTML = '' })
 * }
 */

/**
 * @ignore
 * @grammar $.grep(items, function(item){ ... })  ⇒ array
 * @name $.grep
 * @desc 获取一个新的数组，只包含回调函数返回ture的对象。
 *
 */

/**
 * @grammar $.inArray(element, array, [fromIndex])  ⇒ number
 * @name $.inArray
 * @desc 获取元素在数组中的位置， 若没有找到，则返回***-1***。
 */

/**
 * @grammar $.isArray(object)  ⇒ boolean
 * @name $.isArray
 * @desc 如果对象为数组则返回true。
 */

/**
 * @grammar $.isFunction(object)  ⇒ boolean
 * @name $.isFunction
 * @desc 如果对象是函数则返回true。
 */

/**
 * @grammar $.isPlainObject(object)  ⇒ boolean
 * @name $.isPlainObject
 * @desc 如果Javascript对象是由***new Object*** 或者对象字面量生成的，则返回true。
 * @example $.isPlainObject({})         // => true
 * $.isPlainObject(new Object) // => true
 * $.isPlainObject(new Date)   // => false
 * $.isPlainObject(window)     // => false
 *
 */

/**
 * @grammar $.map(collection, function(item, index){ ... })  ⇒ collection
 * @name $.map
 * @desc 遍历所有集合中的元素，移除函数返回值为***null***和***undefined***的元素。
 */

/**
 * @grammar $.trim(string)  ⇒ string
 * @name $.trim
 * @desc 去掉字符串开头和结尾的空白符。
 */

/**
 * @grammar add(selector, [context])  ⇒ self
 * @name add
 * @desc 添加选择器的结果到当前集合。
 */

/**
 * @grammar addClass(name)  ⇒ self
 * @grammar addClass(function(index, oldClassName){ ... })  ⇒ self
 * @name addClass
 * @desc 给集合中每个元素添加类名，多个类名可用空格分隔开。
 */

/**
 * @grammar after(content)  ⇒ self
 * @name after
 * @desc 集合中每个元素后添加内容，可以是HTML字符串，也可以是DOM节点，或者是节点数组。
 * @example $('form label').after('<p>A note below the label</p>')
 */


/**
 * @grammar append(content)  ⇒ self
 * @name append
 * @desc 集合中每个元素中添加内容，可以是HTML字符串，也可以是DOM节点，或者是节点数组。
 * @example $('ul').append('<li>new list item</li>')
 */


/**
 * @grammar appendTo(target)  ⇒ self
 * @name appendTo
 * @desc 将现集合中的元素添加到目标元素中。
 * @example $('<li>new list item</li>').appendTo('ul')
 */


/**
 * @grammar attr(name)  ⇒ string
 * @grammar attr(name, value)  ⇒ self
 * @grammar attr(name, function(index, oldValue){ ... })  ⇒ self
 * @grammar attr({ name: value, name2: value2, ... })  ⇒ self
 * @name attr
 * @desc 读或写DOM属性。当没有给出value值的时候，从集合的第一个元素中读取特定属性；当给出value值的时候，修改集合中每个元素的特定属性值；当value值为null，则删除属性。多个属性可用对象来传递。
 * @example var form = $('form')
 * form.attr('action')             //=> 读action
 * form.attr('action', '/create')  //=> 写action
 * form.attr('action', null)       //=> 删除action属性

 * // 多个属性
 * form.attr({
 *     action: '/create',
 *     method: 'post'
 * })
 */


/**
 * @grammar before(content)  ⇒ self
 * @name before
 * @desc 在集合每个元素前添加内容，可以是HTML字符串，也可以是DOM节点，或者是节点数组。
 * @example $('table').before('<p>See the following table:</p>')
 */


/**
 * @grammar children([selector])  ⇒ collection
 * @name children
 * @desc 获取每个元素的子节点，并可以通过选择器进行匹配。
 * @example $('ol').children('*:nth-child(2n)')
 *  //=> every other list item from every ordered list
 */


/**
 * @grammar clone()  ⇒ collection
 * @name clone
 * @desc 深克隆集合中的所有元素。
 */


/**
 * @grammar closest(selector, [context])  ⇒ collection
 * @name closest
 * @desc 从当前元素遍历向上找到第一个匹配的元素，可以设定上下文。
 * @example var input = $('input[type=text]')
 *    input.closest('form')
 */


/**
 * @grammar concat(nodes, [node2, ...])  ⇒ self
 * @name concat
 * @desc 添加元素到当前集合，如果参数为数组，其中所有元素添加到集合中。
 */


/**
 * @grammar contents()  ⇒ collection
 * @name contents
 * @desc 获取集合中每个元素的子元素，包括文字节点和注释节点。
 */


/**
 * @grammar css(property)  ⇒ value
 * @grammar css(property, value)  ⇒ self
 * @grammar css({ property: value, property2: value2, ... })  ⇒ self
 * @name css
 * @desc 读写DOM元素的CSS属性。
 * @example var elem = $('h1')
 * elem.css('background-color')          // read property
 * elem.css('background-color', '#369')  // set property
 * elem.css('background-color', '')      // remove property
 *
 * // set multiple properties:
 * elem.css({ backgroundColor: '#8EE', fontSize: 28 })
 */


/**
 * @grammar data(name)  ⇒ value
 * @grammar data(name, value)  ⇒ self
 * @name data
 * @desc 读写DOM元素的data-*属性。
 *
 * @_desc 当读取属性的时候，以下的转化需要注意:
 *
 * “true”, “false”, 和 “null” 会被转化成对应的类型;
 * number values are converted to actual numeric types;
 * 有效的JSON数据会被解析;
 * 其余都会被返回成字符串everything else is returned as string.
 *
 * @desc Zepto基本的data（）只能存储字符串，若想存储对象，需要引入Zepto的data.js文件。
 */


/**
 * @grammar each(function(index, item){ ... })  ⇒ self
 * @name each
 * @desc 遍历集合中每个元素，在遍历函数中，***this***指向当前元素。如果遍历函数返回false，遍历停止。
 * @example $('form input').each(function(index){
 *     console.log('input %d is: %o', index, this)
 * })
 */

/**
 * @grammar empty()  ⇒ self
 * @name empty
 * @desc 清除集合中每个元素的DOM节点。
 */

/**
 * @grammar eq(index)  ⇒ collection
 * @name eq
 * @desc 获取指定位置的元素。
 * @example $('li').eq(0)   //=> only the first list item
 * $('li').eq(-1)  //=> only the last list item
 */


/**
 * @grammar filter(selector)  ⇒ collection
 * @_grammar filter(function(index){ ... })  ⇒ collection v1.0+
 * @name filter
 * @desc 过滤集合中的元素，只留下匹配选择器的元素。
 *
 */


/**
 * @grammar find(selector)  ⇒ collection
 * @name find
 * @desc 在当前上下文中寻找指定元素。
 * @example var form = $('#myform')
 * form.find('input, select')
 */


/**
 * @grammar first()  ⇒ collection
 * @name first
 * @desc 集合中第一个元素。
 * @example $('form').first()
 */


/**
 * @grammar forEach(function(item, index, array){ ... }, [context])
 * @name forEach
 * @desc 遍历所有元素，和each类似，但参数不同，而且返回值为false不会阻止遍历。
 */


/**
 * @grammar get()  ⇒ array
 * @grammar get(index)  ⇒ DOM node
 * @name get
 * @desc 获取集合中元素，与eq不同的是，get返回的是不被Zepto包装的DOM节点。
 * @example var elements = $('h2')
 * elements.get()   //=> get all headings as an array
 * elements.get(0)  //=> get first heading node
 */


/**
 * @ignore
 * @grammar has(selector)  ⇒ collection
 * @grammar has(node)  ⇒ collection
 * @name has
 * @desc 保留子孙匹配选择器的元素，或包含特定节点的元素。
 * @example $('ol > li').has('a[href]')
 * //=> get only LI elements that contain links
 */


/**
 * @grammar hasClass(name)  ⇒ boolean
 * @name hasClass
 * @desc 检查集合中首个元素是否含有指定类名。
 */


/**
 * @grammar height()  ⇒ number
 * @grammar height(value)  ⇒ self
 * @grammar height(function(index, oldHeight){ ... })  ⇒ self
 * @name height
 * @desc 获取首个元素高度，或者设置高度。
 * @example $('#foo').height()   // => 123
 * $(window).height()   // => 838 (viewport height)
 * $(document).height() // => 22302
 */


/**
 * @grammar hide()  ⇒ self
 * @name hide
 * @desc 将集合中元素***display***设为****none***。
 */


/**
 * @grammar html()  ⇒ string
 * @grammar html(content)  ⇒ self
 * @grammar html(function(index, oldHtml){ ... })  ⇒ self
 * @name html
 * @desc 读写元素的innerHTML值， value为空，返回首个元素的innerHTML.若value不为空，则修改每个元素的innerHTML值。
 * @example // autolink everything that looks like a Twitter username
 * $('.comment p').html(function(idx, oldHtml){
 *     return oldHtml.replace(/(^|\W)@(\w{1,15})/g,
 *         '$1@<a href="http://twitter.com/$2">$2</a>')
 * })
 */


/**
 * @grammar index([element])  ⇒ number
 * @name index
 * @desc 获取元素的位置（在父节点中与其他兄弟节点比较的位置）。
 * @example $('li:nth-child(2)').index()  //=> 1
 */


/**
 * @grammar indexOf(element, [fromIndex])  ⇒ number
 * @name indexOf
 * @desc 获取一个元素在当前集合的位置,fromIndex表示开始搜索的位置。
 */


/**
 * @grammar insertAfter(target)  ⇒ self
 * @name insertAfter
 * @desc 将当前集合中的元素插入到目标元素之后。
 * @example $('<p>Emphasis mine.</p>').insertAfter('blockquote')
 */


/**
 * @grammar insertBefore(target)  ⇒ self
 * @name insertBefore
 * @desc 将当前集合中的元素插入到目标元素之前。
 * @example $('<p>See the following table:</p>').insertBefore('table')
 */


/**
 * @grammar is(selector)  ⇒ boolean
 * @name is
 * @desc 首个元素是否匹配选择器。
 */


/**
 * @grammar last()  ⇒ collection
 * @name last
 * @desc 获取末尾元素。
 * @example $('li').last()
 */


/**
 * @grammar map(function(index, item){ ... })  ⇒ collection
 * @name map
 * @desc 遍历集合中所有元素，并收集遍历函数的返回值。
 *
 * 若返回值为***null***或***Returns***，则不包含在返回的集合中。
 * @example elements.map(function(){ return $(this).text() }).get().join(', ')
 */


/**
 * @grammar next()  ⇒ collection
 * @_grammar next(selector)  ⇒ collection v1.0+
 * @name next
 * @desc 获取下一个兄弟节点。
 * @example $('dl dt').next()   //=> the DD elements
 */


/**
 * @grammar not(selector)  ⇒ collection
 * @grammar not(collection)  ⇒ collection
 * @grammar not(function(index){ ... })  ⇒ collection
 * @name not
 * @desc 返回不匹配选择器的集合。 若参数为集合，则返回不包含在内的集合。若参数为函数，则返回值为假的元素。
 *
 */


/**
 * @grammar offset()  ⇒ object
 * @name offset
 * @desc 获取元素在文档中的位置，返回值属性包含：top, left, width and height。
 */


/**
 * @ignore
 * @grammar offsetParent()  ⇒ collection
 * @name offsetParent
 * @desc 返回首个祖先节点CSS***position***属性是"relative", "absolute", "fixed"。
 */


/**
 * @grammar parent([selector])  ⇒ collection
 * @name parent
 * @desc 获取每个元素的最近父节点。
 */


/**
 * @grammar parents([selector])  ⇒ collection
 * @name parents
 * @desc 获取元素的所有的祖先元素。
 *
 * @example $('h1').parents()   //=> [<div#container>, <body>, <html>]
 */


/**
 * @grammar pluck(property)  ⇒ array
 * @name pluck
 * @desc 获取集合元素中指定的属性值，不包含值为***null****和***undefined***。
 * @example $('body > *').pluck('nodeName') // => ["DIV", "SCRIPT"]
 *
 *
 * $.fn.next = function(){
 *     return $(this.pluck('nextElementSibling'))
 * }
 */


/**
 * @ignore
 * @grammar position()  ⇒ object
 * @name position
 * @desc 获取集合首个元素的position值，包含***top***，***left***值。
 *
 * @example var pos = element.position()
 *
 * $('#tooltip').css({
 *     position: 'absolute',
 *     top: pos.top - 30,
 *     left: pos.left
 * })
 */


/**
 * @grammar prepend(content)  ⇒ self
 * @name prepend
 * @desc 将内容添加到DOM元素中。
 * @example $('ul').prepend('<li>first list item</li>')
 */


/**
 * @grammar prependTo(target)  ⇒ self
 * @name prependTo
 * @desc 将元素添加到内容中。
 * @example $('<li>first list item</li>').prependTo('ul')
 */


/**
 * @grammar prev()  ⇒ collection
 * @_grammar prev(selector)  ⇒ collection v1.0+
 * @name prev
 * @desc 获取前一个兄弟节点。
 */


/**
 * @grammar prop(name)  ⇒ value
 * @grammar prop(name, value)  ⇒ self
 * @grammar prop(name, function(index, oldValue){ ... })  ⇒ self
 * @name prop
 * @desc 读写DOM元素的属性。
 */


/**
 * @grammar push(element, [element2, ...])  ⇒ self
 * @name push
 * @desc 添加元素至当前集合中。
 */


/**
 * @grammar ready(function($){ ... })  ⇒ self
 * @name ready
 * @desc 绑定DOMContentLoaded事件，当页面加载完成后执行函数。
 */


/**
 * @grammar reduce(function(memo, item, index, array){ ... }, [initial])  ⇒ value
 * @name reduce
 * @desc 类似Array.reduce。
 */


/**
 * @grammar remove()  ⇒ self
 * @name remove
 * @desc 将元素从父节点中移出。
 */


/**
 * @grammar removeAttr(name)  ⇒ self
 * @name removeAttr
 * @desc 移出所有元素中指定的属性。
 */


/**
 * @grammar removeClass([name])  ⇒ self
 * @grammar removeClass(function(index, oldClassName){ ... })  ⇒ self
 * @name removeClass
 * @desc 移出所有元素中指定的类。
 */


/**
 * @grammar replaceWith(content)  ⇒ self
 * @name replaceWith
 * @desc 用新的内容替换集合中的元素。
 */


/**
 * @ignore
 * @grammar scrollTop()  ⇒ number
 * @name scrollTop
 * @desc 获取window或可滚动元素在当前页面滚动的像素值。
 */


/**
 * @grammar show()  ⇒ self
 * @name show
 * @desc 恢复元素display的默认值。
 */


/**
 * @grammar siblings([selector])  ⇒ collection
 * @name siblings
 * @desc 获取元素的兄弟节点。
 */


/**
 * @grammar size()  ⇒ number
 * @name size
 * @desc 获取集合内元素个数。
 */


/**
 * @grammar slice(start, [end])  ⇒ array
 * @name slice
 * @desc 抽取数组的子集，start作为起始位置。
 */


/**
 * @grammar text()  ⇒ string
 * @grammar text(content)  ⇒ self
 * @name text
 * @desc 读写元素的text内容。
 */


/**
 * @grammar toggle([setting])  ⇒ self
 * @name toggle
 * @desc 切换元素的显示隐藏，设置setting为true，显示元素，反之则隐藏元素。
 * @example var input = $('input[type=text]')
 * $('#too_long').toggle(input.val().length > 140)
 */


/**
 * @grammar toggleClass(name, [setting])  ⇒ self
 * @grammar toggleClass(function(index, oldClassName){ ... }, [setting])  ⇒ self
 * @name toggleClass
 * @desc 切换元素的类名，若存在，则删除该类名，反之，则添加该类名。
 */


/**
 * @grammar unwrap()  ⇒ self
 * @name unwrap
 * @desc 移出元素的父节点，并加元素添加到原先自身父节点的位置。
 * @example $(document.body).append('<div id=wrapper><p>Content</p></div>')
 * $('#wrapper p').unwrap().parents()  //=> [<body>, <html>]
 */


/**
 * @grammar val()  ⇒ string
 * @grammar val(value)  ⇒ self
 * @grammar val(function(index, oldValue){ ... })  ⇒ self
 * @name val
 * @desc 读写元素的value值。
 */


/**
 * @grammar width()  ⇒ number
 * @grammar width(value)  ⇒ self
 * @grammar width(function(index, oldWidth){ ... })  ⇒ self
 * @name width
 * @desc 获取首个元素的宽度，或设置所有元素的宽度。
 * @example $('#foo').width()   // => 123
 * $(window).width()   // => 768 (viewport width)
 * $(document).width() // => 768
 */


/**
 * @grammar wrap(structure)  ⇒ self
 * @_grammar wrap(function(index){ ... })  ⇒ self v1.0+
 * @name wrap
 * @desc 用DOM结构包装集合元素。
 * @example // wrap each button in a separate span:
 * $('.buttons a').wrap('<span>')
 * // wrap each code block in a div and pre:
 * $('code').wrap('<div class=highlight><pre /></div>')
 */


/**
 * @grammar wrapAll(structure)  ⇒ self
 * @name wrapAll
 * @desc 将所有元素用一个Wrap包装起来。
 * @example // wrap all buttons in a single div:
 * $('a.button').wrap('<div id=buttons />')
 */


/**
 * @grammar wrapInner(structure)  ⇒ self
 * @_grammar wrapInner(function(index){ ... })  ⇒ self v1.0+
 * @name wrapInner
 * @desc 将元素内部的内容用一个Wrap包装起来。
 * @example // wrap the contents of each navigation link in a span:
 * $('nav a').wrapInner('<span>')
 *
 * // wrap the contents of each list item in a paragraph and emphasis:
 * $('ol li').wrapInner('<p><em /></p>')
 */

