var quiztitle = "NOC Quiz";

var quiz = [

    {
        'question':"49/55[填空题] 执行以下代码，输出结果为<br>for a in 'mirror':<br>&nbsp;&nbsp;print(a, end=\"\")<br>&nbsp;&nbsp;if a == 'r':<br>&nbsp;&nbsp;&nbsp;&nbsp;break",
        'choices':['A.mir','B.aaa','C.aa','D.mi'],
        'correct':['A.mir'],
        'explanation':'先打印，再判断'
    },

    {
        'question':'50/55[填空题]. x=2.6，则表达式round(x)的值为',
        'choices':['A.2.6','B.3','C.2','D.2.5'],
        'correct':['B.3'],
        'explanation':'四舍五入'
    },

    {
        'question':'51/55[填空题] 执行print(1 + 2 * 2 + 6 / 3) 的结果为',
        'choices':['A.4','B.7.0','C.7','D.4.0'],
        'correct':['B.7.0'],
        'explanation':'整除操作符是//，/是浮点除'
    },

    {
        'question':'52/55[填空题] 循环语句 for i in range(8,-4,-2)执行了几次循环',
        'choices':['A.6','B.7','C.5','D.0'],
        'correct':['A.6'],
        'explanation':'range 含头不含尾'
    },

    {
        'question':'53/55[填空题] 切片选取的区间是___型的，不包括结束位的值',
        'choices':['A.左开右闭','B.左闭右开','C.左开右开','D.左闭右闭'],
        'correct':['B.左闭右开'],
        'explanation':''
    },

    {
        'question':'54/55[填空题] 下面代码的输出结果是<br>x=1<br>x *= 3+5**2<br>print(x)',
        'choices':['A.16','B.13','C.28','D.35'],
        'correct':['C.28'],
        'explanation':'5**2 == 5 * 5'
    },

    {
        'question':'55/55[填空题] 阅读以下程序，程序运行后会输出几个 hello<br>n= 2<br>while n < 5:<br>&nbsp;&nbsp;print(\"hello\")<br>&nbsp;&nbsp;n=n+1',
        'choices':['A.2','B.3','C.4','D.5'],
        'correct':['B.3'],
        'explanation':''
    },

    {
        'question':'print(pow(3, 2)) 的输出结果是?( ) ',
        'choices':['A.3','B.2','C.8','D.9'],
        'correct':['D.9'],
        'explanation':'pow(x, y) 是 Python 中的一个标准数学函数，用于进行幂运算，会返回 x 的 y 次方。'
    },

    {
        'question':'代码 print( 10 / 2 == 5.0) 输出的结果是?( )',
        'choices':['A.True','B.False','C.-1','D.0'],
        'correct':['A.True'],
        'explanation':'/代表除法运算，除法运算的结果是浮点数。所以 10/2 结果是 5.0。'
    },

    {
        'question':'以下选项中不是 Python 语言的保留字的是?( )',
        'choices':['A.except','B.do','C.pass','D.while'],
        'correct':['B.do'],
        'explanation':'在 Python 中，没有 do 这个关键字。'
    },

    {
        'question':'关于 Python 语言的特点，以下选项描述正确的是?',
        'choices':['A.Python 语言不支持面向对象','B.Python 语言是解释型语言','C.Python 语言是编译型语言','D.Python 语言是非跨平台语言'],
        'correct':['B.Python 语言是解释型语言'],
        'explanation':'Python 是解释型的语言，它可以跨平台工作，也支持面向对象编程。'
    },

    {
        'question':'Python 中，用来定义函数的关键字是?( )',
        'choices':['A.return','B.define','C.def','D.function'],
        'correct':['C.def'],
        'explanation':'def 是 Python 中用来定义函数的关键字。'
    },

    {
        'question':'下面哪一个不是 Python 的数据类型?( )',
        'choices':['A.列表','B.字典','C.元组','D.逻辑运算符'],
        'correct':['D.逻辑运算符'],
        'explanation':'D 选项中的逻辑运算符，是用来进行逻辑计算的，不是数据类型。'
    },

    {
        'question':'关于 import 引用，以下选项中描述错误的是?( )',
        'choices':['A.使用 import turtle 引入 turtle 库','B.使用 import turtle as t 引入 turtle 库，取别名为 t','C.可以使用 from turtle import setup 引入 turtle 库','D.import 保留字用于导入模块或者模块中的对象'],
        'correct':['C.可以使用 from turtle import setup 引入 turtle 库'],
        'explanation':'from turtle import setup 这个语句，只是从 turtle 库中导入了 setup 这个函数，没有导入 turtle 库里的所有内容。'
    },

    {
        'question':'下列选项中，数据类型是浮点型的是?( )',
        'choices':['A.\'7.0\'','B.7','C.7.0','D.\'7\''],
        'correct':['C.7.0'],
        'explanation':'在 Python 中，浮点型由整数部分与小数部分组成。‘ ’用单引号或者“ ”双引号包裹起来的是字符串类型。'
    },

    {
        'question':'下列条件中，可以判断变量 a 等于变量 b 的条件是?( )',
        'choices':['A.a = b','B.a >= b','C.a == b','D.a != b'],
        'correct':['C.a == b'],
        'explanation':'在 Python 中，一个等号表示赋值，两个等号会判断相等。'
    },

    {
        'question':'在print函数的输出字符串中可以将下面的哪个字符串作为参数，指定后面输出的字符串呢?( )',
        'choices':['A.%d','B.%s','C.%t','D.%c'],
        'correct':['B.%s'],
        'explanation':'%s 表示的是字符串，%d 表示的是十进制整数，%t 表示的是横向制表符，%c 表示的是字符。'
    },

    {
        'question':'下面哪个是 Python 中的不变的数据结构?( )',
        'choices':['A.set','B.list','C.tuple','D.dict'],
        'correct':['C.tuple'],
        'explanation':'除了 tuple 也就是元组以外，其他选项的数据结构都是可变的。'
    },

    {
        'question':'下列哪种不是 Python 元组的定义方式?( )',
        'choices':['A.(1)','B.(1, )','C.(1, 2)','D.(1, 2, (3, 4))'],
        'correct':['A.(1)'],
        'explanation':'当创建元组时，只有一个元素的时候，要在括号中加上逗号，表示创建的是一个元组。'
    },

    {
        'question':'Python 调用下面的哪个函数可读取出文件中的所有内容?( )',
        'choices':['A.read()','B.readline()','C.readlines()','D.readclose()'],
        'correct':['A.read()'],
        'explanation':'在 Python 中，read() 函数可以直接将文件中的所有内容都提取出来。'
    },

    {
        'question':'设置 turtle 窗口大小的函数是?( )',
        'choices':['A.turtle.setup()','B.turtle.shape()','C.turtle.window()','D.turtle.pensize()'],
        'correct':['A.turtle.setup()'],
        'explanation':'setup() 是用于设置主窗体的大小和位置的函数。'
    },

    {
        'question':'以下程序的输出结果是.( )<br>ss = list(set("jzzszyj"))<br>ss.sort()<br>print(ss)',
        'choices':["A.['z', 'j', 's', 'y']","B.['j','s','y','z']","C.['j','z','z','s','z','y','j']","D.['j','j','s','y','z','z','z']"],
        'correct':["B.['j','s','y','z']"],
        'explanation':'字符串变成集合 set 只剩下不重复字母 \'j\' \'z\' \'s\' \'y\' 接下来变成列表进行 sort()排序，从小到大：\'j\' \'s\' \'y\' \'z\''
    },

    {
        'question':'下列代码段中，能够接受用户输入一个年龄，并判断是否成年的是',
        'image': 'noc/mock16.png',
        'choices':['A.','B.','C.','D.'],
        'correct':['B.'],
        'explanation':'选项 A，input() 函数接受⼀个标准输⼊数据，返回为 string 类型。选项 C ，if 条件判断 age => 18, 这⾥的 ‘=>’ 是错误的写法，在 Python 中没有这样的运算写法，正确的应该是 age >= 18。选项 D，print()函数中的内容缺少引号，打印的内容应该是 str 字符串类型的。'
    },

    {
        'question':'执行下面的代码，正确的结果为( )<br>list = [1, 2, 3]<br>for i in range(2):<br>&nbsp;&nbsp;list.append(4)<br>&nbsp;&nbsp;list.pop(0)<br>print(list)',
        'choices':['A.[1，2，3]','B.[1，2，3，4]','C.[2, 3, 4]','D.[3, 4, 4]'],
        'correct':['D.[3, 4, 4]'],
        'explanation':'这里的 for 循环次数是 2 次。第一次循环，往列表中的末尾添加新的元素 4，列表变成了 [1，2，3，4]，然后移除列表索引位置为 0 的元素，列表变成了 [2，3，4]。第二次循环，继续往列表中的末尾添加新的元素 4，列表变成了 [2，3，4，4]，然后移除列表索引位置为 0 的元素，列表变成了 [3，4，4]'
    },

    {
        'question':'运行下方代码段，输出的是( )。',
        'image': 'noc/mock18.png',
        'choices':['A.9.0','B.9','C.3.0','D.3'],
        'correct':['C.3.0'],
        'explanation':'变量 y 的值是 3，满足 y != 0 的条件，x / y 就是 9 除以 3，在 Python 中，任何除法运算的结果都是浮点型，所以答案是 3.0'
    },

    {
        'question':'关于 requests 的描述，下列选项中正确的是?',
        'choices':['A.requests 是数据可视化方向的 Python 第三方库','B.requests 是处理 HTTP 请求的第三方库','C.requests 是支持多种语言的自然语言处理 Python 第三方库','D.requests 是一个支持符号计算的 Python 第三方库'],
        'correct':['B.requests 是处理 HTTP 请求的第三方库'],
        'explanation':'requests 是 Python 的一个简单易用的 HTTP 库，可以非常方便的处理 URL 资源。'
    },

    {
        'question':'运行下方代码段，输出的结果是( ).<br>import numpy<br>a = numpy.arange(4)<br>b = [2]<br>print(a*b)',
        'choices':['A.8','B.[2*4]','C.[ 0 2 4 6 ]','D.[ 2 4 6 8 ]'],
        'correct':['C.[ 0 2 4 6 ]'],
        'explanation':'变量 a 的值为：[0 1 2 3 ]，变量 b 的值为：[2] ，print 打印执行的计算式 a*b 的结果为[ 0 2 4 6]。'
    },

    {
        'question':'下列关于 Python 数据处理功能的叙述中，错误的是( )。',
        'choices':['A.一维数据是由对等关系的有序或无序数据构成，采用线性方式组织','B.二维数据是由多个一维数据构成，是一维数据的组合形式','C.高维数据是仅利用最基本的二元关系展示数据间的复杂结构','D.利用 Python 进行数据处理时，直接修改和覆盖原始数据文件是一种高效的数据处理习惯'],
        'correct':['D.利用 Python 进行数据处理时，直接修改和覆盖原始数据文件是一种高效的数据处理习惯'],
        'explanation':'利用 Python 进行数据处理时，不应该直接修改原始数据文件。避免误操作后破坏原始数据。'
    },

    {
        'question':'运行下方代码段，下列叙述中正确的是( )<br>seq = eval(input())<br>if len(seq)>3:<br>&nbsp;&nbsp;seq.pop()<br>else:<br>&nbsp;&nbsp;seq.append(\'5\')<br>print(seq)',
        'choices':['A.输入[1,2,3,4]，输出[1, 2, 3]','B.输入(4,5,6,7)，输出(4, 5, 6)','C.输入[1,3]，输出[1, 3, 5]','D.输入(5,5)，输出(5, 5, 5)'],
        'correct':['A.','D.'],
        'explanation':'首先 函数 eval() 将输入的字符串转换为 python 对应到的数据类型，再判断变量的长度是否大于 3，若成立，则删除变量的最后一项；否则将字符串 \'5\' 添加到变量的最后。选项 A，输入[1,2,3,4]，判断成立，输出[1, 2, 3]；选项 B，输入(4,5,6,7)，判断成立，执行至 seq.pop()，程序报错，元组没有 pop()方法；选项 C，输入[1,3]，判断不成立，输出[1, 3, \'5\']；选项 D，输入(5,5)，判断不成立，执行 seq.append(\'5\')，程序报错，元组没有 append()方法'
    },

    {
        'question':'将列表 [1, 3, 0, 4, 2, 6, 5] 进行排序，并将过程中的结果打印如下: <br>[1, 3, 0, 4, 2, 6, 5]<br>[1, 3, 0, 4, 2, 6, 5]<br>[0, 1, 3, 4, 2, 6, 5]<br>[0, 1, 3, 4, 2, 6, 5]<br>[0, 1, 2, 3, 4, 6, 5]<br>[0, 1, 2, 3, 4, 6, 5]<br>[0, 1, 2, 3, 4, 5, 6]<br>请问使用的是一下那种排序算法呢?',
        'choices':['A.快速排序','B.冒泡排序','C.选择排序','D.插入排序'],
        'correct':['D.插入排序'],
        'explanation':'插入排序的基本思想是将一个数据插入一个已经有序的列表中，生成一个新的有序列表。对一个乱序列表进行插入排序的思路是，遍历列表，依次取出列表中的数据，与前面的数据一一进行比较，如果比前一个数据小，就交换位置，直到遍历完列表的最后一个数据为止。'
    },

    {
        'question':'在 Python 正则表达式中，用来匹配任意非数字字符的是( )',
        'choices':['A.\\d','B.\\D','C.\\w','D.\\W'],
        'correct':['B.\\D'],
        'explanation':'\\d 匹配一个数字字符。等价于 [0-9]。\\D 匹配一个非数字字符。等价于 [^0-9]。\\w 匹配包括下划线的任何单词字符。等价于\'[A-Za-z0-9_]\'\\W 匹配任何非单词字符。等价于 \'[^A-Za-z0-9_]\''
    },

    {
        'question':'random 库中，random() 函数的作用是?',
        'choices':['A.生成随机数 x ，且 0 ≤ x < 100 ，x 为整数','B.生成随机数 x ，且 0.0 ≤ x < 10.0','C.将列表中的元素打乱顺序重新排列','D.生成随机数 x ，且 0.0 ≤ x < 1.0'],
        'correct':['D.生成随机数 x ，且 0.0 ≤ x < 1.0'],
        'explanation':'random() 函数用于返回一个 0 到 1 之间的随机数。'
    },

    {
        'question':'运行下方代码段，输出的结果是( )。<br>import numpy<br>a = numpy.arange(3,8)<br>b = [3]<br>print(a-b)',
        'choices':['A.[0 5]','B.[3 4 5 6 7]','C.[0 1 2 3 4]','D.[0 1 2 3 4 5]'],
        'correct':['C.[0 1 2 3 4]'],
        'explanation':'a 产生从 3-8 的数组，包含 3 不包含 8，结果就是[3 4 5 6 7]，在与 b 进行广播运算，数组里的每个数都-3，结果就是 [0 1 2 3 4]'
    },

    {
        'question':'下面的代码运行结果正确的是?( )',
        'image':'noc/mock27.png',
        'choices':['A.[]','B.[1]',"C.['1', '2']","D.['1', '2', '3', '4', '5']"],
        'correct':['A.[]'],
        'explanation':'在 Python 中，我们可以使用 a[10:]类似的写法来对字符串进行切片，冒号左边的数字表示切片的起始位置，右边表示结束位置，如果数字为空，就表示从开头截取，或者截取到结尾。在这段代码中，起始的位置是 10，超过了列表的长度，所以切出来的切片就是空列表。'
    },

    {
        'question':'如图所示情况, 下一步程序应该怎么做?( )',
        'image':'noc/mock28.png', 
        'choices':['A.计算距离分类并计算新的类中心点','B.直接停止程序并返回分类结果','C.计算新的类中心直接返回结果','D.程序运行出错'],
        'correct':['A.计算距离分类并计算新的类中心点'],
        'explanation':'程序首先会计算各个点距 点 1、点 2 的距离后重新分类; 然后再计算新分出类的类中心点，反复迭代计算，直到类中心点不会出现变化，则程序结束 ，返回结果。所以正确答案为 A 。'
    },

    {
        'question':'使用迪杰斯特拉(Dijkstra)算法，求图中从顶点 1 到其他各顶点的最短路径，得到各 最短路径的目标顶点依次是( )。',
        'image':'noc/mock29.png', 
        'choices':['A.5，2，6，3，4','B.5，2，3，6，4','C.5，2，4，3，6','D.5，2，3，4，6'],
        'correct':['B.5，2，3，6，4'],
        'explanation':'观察图片发现：2 号不能直接到 6 号，排除 A；4 号不能直接到 3 号，排除 C；4 号不能直接到 6 号，排除 D'
    },

    {
        'question':'若 A, B, C, D, E 这 5 个元素依次顺序进栈，则下列不会出现的出栈顺序是( )。',
        'choices':['A.E,A,B,C,D','B.A,B,C,D,E','C.B,C,D,E,A','D.E,D,C,B,A'],
        'correct':['A.E,A,B,C,D'],
        'explanation':'栈的特点是先进后出。ABCDE 依次进栈，下一个元素放进去的时候，里面的元素也可以出来。B 选项顺序 ABCDE，A 进-A 出-B 进-B 出-C 进-C 出-D 进-D 出-E 进-E 出；C 选项顺序 BCDEA，A 进-B 进-B 出-C 进-C 出-D 进-D 出-E 进-E 出-A 出；D 选项顺序 EDCBA，ABCDE 进-EDCBA 出；A 选项错误，如果 E 最先出的话，所有元素都在栈里面。出栈顺序只能是 EDCBA'
    },

    {
        'question':'[多选]哪个选项对 turtle.done()的描述是正确的?( )',
        'choices':['A.turtle.done()是用来隐藏 turtle 绘制画笔','B.turtle.done()用来停止画笔绘制','C.turtle.done()是用来在绘画结束后，保持绘画的窗口不关闭的','D.我们必须要在程序的最后写上 turtle.done()，不然程序运行会报错'],
        'correct':['B.turtle.done()用来停止画笔绘制','C.turtle.done()是用来在绘画结束后，保持绘画的窗口不关闭的'],
        'explanation':'turtle.done() 语句可以让画笔停止绘制，但是窗口不会关闭。一般我们会把 这个语句放在程序的最后，让我们能够看到程序最后的绘制结果。'
    },

    {
        'question':'[多选]下面哪些代码可以往列表 ls 中添加元素?',
        'choices':['A.ls.append()','B.ls.clear()','C.ls.pop()','D.ls.insert()'],
        'correct':['A.ls.append()','D.ls.insert()'],
        'explanation':'在 Python 中，append() 和 insert()都可以往列表中增加元素，只是 append 是在最后增加，insert 可以自由的插入列表中。clear() 函数是用来清空列表的。pop()函数是删除最后一项，并且作为返回值。'
    },

    {
        'question':'[多选]以下表达式的值为 True 的是?',
        'choices':['A.5 + 3 < 10','B.3 > 2 == 2','C.a - 5 > 5','D.4 == \'4.0\''],
        'correct':['A.5 + 3 < 10','B.3 > 2 == 2'],
        'explanation':'选项 C 中的变量 a 没有进行赋值，无法判断；选项 D 中，4 是整型，\'4.0\' 是字符串，不相等。'
    },

    {
        'question':'[多选]下面的语句中，哪个可以在终端区中打印出 True 呢?',
        'choices':['A.print( not 12 >= 56 )','B.print( 123 > 3 and 55 == \'55\')','C.print( 3 >= 5 or 5 <= 5)','D.print(123 > 3 or 55 == \'55\')'],
        'correct':['A.print( not 12 >= 56 )','C.print( 3 >= 5 or 5 <= 5)','D.print(123 > 3 or 55 == \'55\')'],
        'explanation':'not 语句会把判断的结果反转，and 语句是两个条件同时成立时，结果才是 True。or 语句是两个条件只要有一个成立，结果就是 True，所以最后的结果选 ACD。'
    },

    {
        'question':'[多选]下面的语句中，哪些可以正确的创建出一个字典。',
        'choices':['A.dict1 = {}','B.dict2 = {5,7}','C.dict3 = {[5]:7}','D.dict4 = {(5):7}'],
        'correct':['A.dict1 = {}','D.dict4 = {(5):7}'],
        'explanation':'B 选项错误，创建的是一个集合；C 选项错误，字典的 key 键不能是一个列表。'
    },

    {
        'question':'[多选]现有 PAI = 3.1415926 作为浮点数变量，下列代码可以将 PAI 保留三位小数并输出的 是?',
        'choices':['A.print(f"{PAI:.5f}")','B.print(f"{PAI:0.3f}")','C.print(round(PAI, 3))','D.print(round(PAI))'],
        'correct':['B.print(f"{PAI:0.3f}")','C.print(round(PAI, 3))'],
        'explanation':'将浮点数小数点后保留三位数有两种方法，一种是字符串格式化，一种是 round() 函数。'
    },

    {
        'question':'[多选]运行下面的代码，程序可能打印的结果是什么呢?',
        'image':'noc/mockm7.png',
        'choices':['A.7','B.8','C.11','D.15'],
        'correct':['A.7','B.8','C.11'],
        'explanation':'使用 randint 函数，生成的是 5 到 10 的随机数，当生成的随机数大于或等于 7 时，就会直接将结果打印出来，也就可能是 78910，当生成的随机数小于 7 但是大于或等于 5 时，打印出的就可能是 5 + 5 = 10，5+6=11。所以最后不可能出现 15 这个结果。'
    },

    {
        'question':'[多选]现有字符串 s = \'hello world\' ，以下操作能获得字符串 \'llo\' 的有? ',
        'choices':['A.s[3]','B.s[2:5]','C.s[2:4]','D.s[-9:-6]'],
        'correct':['B.s[2:5]','D.s[-9:-6]'],
        'explanation':'字符串切片的格式为 str[开始索引:结束索引] ，并且在切片操作中，结束索引的值不取。'
    },

    {
        'question':'[多选]如果使用列表创建栈，需要用到的列表方法有',
        'choices':['A.append()','B.insert()','C.index()','D.pop()'],
        'correct':['A.append()','D.pop()'],
        'explanation':''
    },

    {
        'question':'[多选]下面扩展名的图片格式，可以使用<img>标签直接插入到网页中的有哪些',
        'choices':['A.PNG','B.JPG','C.SWF','D.GIF'],
        'correct':['A.PNG','B.JPG','D.GIF'],
        'explanation':'<img>标签支持的图片格式：1. JPG：不支持透明半透明，所有空白区域填充白色;2.Gif：支持透明，不支持半透明;3.PNG8：支持透明，不支持半透明;4.PNG24：支持透明，也支持半透明'
    },

    {
        'question':'print("3"*2),输出结果为 6',
        'choices':['A.对','B.错'],
        'correct':['B.错'],
        'explanation':'字符串的乘法运算代表重复几次，运算的结果为“33”'
    },

    {
        'question':'break 语句可以结束整个程序的运行。',
        'choices':['A.对','B.错'],
        'correct':['B.错'],
        'explanation':'break 语句是用来跳出循环的，他没法直接结束所有的语句。'
    },

    {
        'question':'Python 语言是一门面向对象编程的语言。',
        'choices':['A.对','B.错'],
        'correct':['A.对'],
        'explanation':'Python 语句具有很强的面对对象特性。'
    },

    {
        'question':'函数可以没有参数，也可以传入多个参数。',
        'choices':['A.对','B.错'],
        'correct':['A.对'],
        'explanation':'在 Python 中，函数是组织好的，可重复使用的，用来实现单一，或相关联功能的代码段。其可以没有参数，也可以传入多个参数'
    },

    {
        'question':'列表这种数据结构可以存储多个元素，包括存储元组，字典等。',
        'choices':['A.对','B.错'],
        'correct':['A.对'],
        'explanation':'在 Python 中，列表可以存储多个元素，并为每个元素分配一个索引。'
    },

    {
        'question':'在使用 try-except-finally 处理一段异常代码的时候，则不管有没有发生异常，都会 执行 finally 语句后的内容。',
        'choices':['A.对','B.错'],
        'correct':['A.对'],
        'explanation':'finally 里的代码一定会执行'
    },

    {
        'question':'Pillow 库(PIL)的主要作用是音频文件处理。',
        'choices':['A.对','B.错'],
        'correct':['B.错'],
        'explanation':'Pillow 库（PIL）的主要作用是图像文件处理。'
    },

    {
        'question':'beautifulsoup 是一个可以从 HTML 或 XML 文件中提取数据的 Python 库。',
        'choices':['A.对','B.错'],
        'correct':['A.对'],
        'explanation':'beautifulsoup 是一个可以从 HTML 或 XML 文件中提取数据的 Python 库，简单来说，它能将HTML 的标签文件解析成树形结构，然后方便地获取到指定标签的对应属性。'
    },

    {
        'question':'KMeans(n_clusters=3)中参数 3 的含义是将数据划分为 3 类。',
        'choices':['A.对','B.错'],
        'correct':['A.对'],
        'explanation':'在 KMeans 算法中， n_clusters 中 cluster 就是类、簇的意思，参数的含义就是将数据分为几类， 这里参数的含义就是将数据分为 3 类。'
    },

];
