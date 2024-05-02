var quiztitle = "NOC Quiz";

var quiz = [

    {
        'question':'1/55[单选题]. 在Python3中，下列程序运行结果为（） print(\'\\n\'.join([\'a\', \'b\', \'c\']))',
        'choices':['A.\'abc\'','B.a b c','C.报错','D.None'],
        'correct':['B.a b c'],
        'explanation':'[2023r1]\\n为换行，输出内容应为<br>a<br>b<br>c'
    },

    {
        'question':'2/55[单选题]. 以下代码段的运行结果为（）<br>b1 = [1, 2, 3]<br>b2 = [2, 3, 4]<br>b3 = [val for val in b1 if val in b2]<br>print(b3)',
        'choices':['A.[1,2,3,4]','B.[2]','C.[2,3]','D.程序有误'],
        'correct':['C.[2,3]'],
        'explanation':'[2023r1]遍历 b1 中元素，如果该元素存在于 b2 中，则将此元素放入 b3'
    },

    {
        'question':'3/55[单选题]. 在Python3中，下列程序返回的结果为（）<br>strs = \'123456\'<br>print(strs.find(\'9\')',
        'choices':['A.None','B.-1','C.错','D.空'],
        'correct':['B.-1'],
        'explanation':'[2023r1]查找的子字符串不存在时，返回 -1'
    },

    {
        'question':'4/55[单选题]. 以下程序是实现找出1-10中奇数，则横线处应填写（）<br>for i in range(1, 11):<br>&nbsp;&nbsp;if i % 2 == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;________<br>&nbsp;&nbsp;print(i)',
        'choices':['A.break','B.yield','C.continue','D.flag'],
        'correct':['C.continue'],
        'explanation':'[2023r1]i 为偶数时，结束当前循环'
    },

    {
        'question':'5/55[单选题]. python3中，执行 not 1 and 1 的结果为（）',
        'choices':['A.True','B.False','C.0','D.1'],
        'correct':['B.False'],
        'explanation':'[2023r1]'
    },

    {
        'question':'6/55[单选题]. 已知 a=-2，b=10/3,则 python 表达式 round(b,1)+abs(a) 的值为（)',
        'choices':['A.1.3','B.5.33','C.5.4','D.5.3'],
        'correct':['D.5.3'],
        'explanation':'[2023r1]'
    },

    {
        'question':'7/55[单选题]. 关于Python的分支结构，以下选项中描述错误的是（）',
        'choices':['A.分支结构使用if保留字','B.Python中if-elif-else语句描述多分支结构','C.Python中if-else语句用来形成二分支结构','D.if-else分支结构可以向已经执行过的语句部分跳转'],
        'correct':['D.if-else分支结构可以向已经执行过的语句部分跳转'],
        'explanation':'[2023r1]'
    },

    {
        'question':'8/55[单选题]. 以下代码输出为（）<br>list1 = {\'1\':1,\'2\':2}<br>list2 = list1<br>list1[\'1\'] = 5<br>sum = list1[\'1\'] + list2[\'1\']<br>print(sum)',
        'choices':['A.1','B.2','C.7','D.10'],
        'correct':['D.10'],
        'explanation':'[2023r1]'
    },

    {
        'question':'9/55[单选题]. 在Python3中，对于以下程序正确的是()<br>lists = [1, 2, 3, 4, 5, 6]<br>print(lists[6:])',
        'choices':['A.报错','B.[]','C.[1,2,3,4,5,6]','D.[6]'],
        'correct':['B.[]'],
        'explanation':'[2023r1]'
    },

    {
        'question':'10/55[单选题]. 以下循环输出结果是(）<br>kvps = {\'1\': 1, \'2\': 2}<br>theCopy = kvps.copy()<br>kvps[\'1\']. = 5<br>sum = kvps[\'1\']. + theCopy[\'1\']<br>print(sum)',
        'choices':['A.1','B.2','C.6','D.10'],
        'correct':['C.6'],
        'explanation':'[2023r1]'
    },

    {
        'question':'11/55[单选题]<br>一个段代码定义如下，下列调用结果正确的是（）<br>def bar(multiple):<br>&nbsp;&nbsp;def foo(n):<br>&nbsp;&nbsp;&nbsp;&nbsp;return multiple ** n<br>&nbsp;&nbsp;return foo',
        'image':'',
        'choices':['A.bar(2)(3) == 8','B.bar(2)(3) == 6','C.bar(3)(2) == 8','D.bar(3)(2) == 6'],
        'correct':['A.bar(2)(3) == 8'],
        'explanation':'[2023r1]bar(2) 相当于 foo，bar(2)(3) 相当于 foo(3)，bar(2)(3) 相当于 2 ** 3 = 2 * 2 * 2'
    },

    {
        'question':'12/55[单选题]. 下列程序运行结果为（)<br>a=[1, 2, 3, 4, 5]<br>sums = sum(map(lambda x: x + 3, a[1::3]))<br>print(sums)',
        'image':'',
        'choices':['A.10','B.13','C.15','D.17'],
        'correct':['B.13'],
        'explanation':'[2023r1]a[start:stop:step]，所以 a[1::3]. 相当于从索引1开始取值，三步取一个，即 a[1::3]=[2,5]，lambda 将每个值加3，再求和，相当于（2+3）+（5+3）'
    },

    {
        'question':'13/55[单选题]. 在Python3中，下列程序运行结果说明正确的是（）<br>strs = \'abcd12efg\'<br>print(strs.upper().title())',
        'image':'',
        'choices':['A.\'ABCD12EFG\'','B.\'Abc12efg\'','C.语法错误','D.\'Abcd12Efg\''],
        'correct':['D.\'Abcd12Efg\''],
        'explanation':'[2023r1]title 函数效果覆盖了 upper 函数效果'
    },

    {
        'question':'14/55[单选题]. Python3中，下列对程序描述正确的是（)<br>lists = [1, 2, 3, 4, 5, 6]<br>lists.append([7,8,9])<br>print(lists)',
        'image':'',
        'choices':['A.[1,2,3,4,5,6]','B.[1,2,3,4,5,6,[7,8,9]','C.[1,2,3,4,5,6,7,8,9]','D.[7,8,9]'],
        'correct':['B.[1,2,3,4,5,6,[7,8,9]'],
        'explanation':'[2023r1]'
    },

    {
        'question':'15/55[单选题]. 在Python3中，下列正确的是()<br>lists = [1, 2, 3]<br>lists.insert(2, [7,8,9])<br>print(lists)',
        'image':'',
        'choices':['A.[1,2,3,7,8,9]','B.[1,2,3,[7,8,9]]','C.[1,2,[7,8,9],3]','D.[1,2,7,8,9,3]'],
        'correct':['C.[1,2,[7,8,9],3]'],
        'explanation':'[2023r1]'
    },

    {
        'question':'16/55「单选题]. 在Python3中，下列程序运行结果为（）<br>lists = [1, 2, 3, 4]<br>tmp = 0<br>for i,j in enumerate(lists):<br>&nbsp;&nbsp;tmp +=i*j<br>print(tmp)',
        'image':'',
        'choices':['A.20','B.30','C.100','D.None'],
        'correct':['A.20'],
        'explanation':'[2023r1]'
    },

    {
        'question':'17/55[单选题]. 下图为A、B、C、D四个小镇及小镇之间的火车线路。双箭头上的两个数字表示两地之间火车（每个方向一列火车）每小时的出发时刻和到达时刻。例如，从A到B的火车依次于8:28、9:28、10:28等时刻出发，分别在10分钟后，即8:38、9:38和10:38到达B。同样地，从B到A的火车也依次于8:28、9:28、10:28等时刻出发,并在10分钟后到达A。海狸于8:45到达小镇A的火车站，他想坐火车去小镇D。那么，他最快几点能到达小镇D的火车站呢？',
        'image':'noc/202317.png',
        'choices':['A.9:37','B.9:52','C.10:37','D.10:52'],
        'correct':['B.9:52'],
        'explanation':'[2023r1]'
    },

    {
        'question':'18/55[单选题]. 下图是一个被划分为若干方格的公园，方格中的数字代表游客留在那里的垃圾数量。公园里有两个机器人Anton和Boris,它们会按照指令收集垃圾。<br>首先，让机器人Anton按照如下的指令依次进行工作：<br>↑=向上 ↑=向上 ←=向左<br>接着，让机器人Boris按照如下指令依次进行工作：<br>↑=向上 ↑=向上 ←=向左<br>请问机器人Boris按照指令将收集多少垃圾呢？',
        'image':'noc/202318.png',
        'choices':['A.3','B.9','C.11','D.12'],
        'correct':['B.9'],
        'explanation':'[2023r1]'
    },

    {
        'question':'19/55[单选题]. 7只海狸在玩音乐椅游戏，但他们不知道规则。音乐开始播放时，海狸会按照他们想要的任何方向移动，而且1把椅子可以同时被多只海狸坐下。在每个回合中，大型海狸（A和B）会逆时针绕过3把椅子，中型海狸（C和D）逆时针绕过2把椅子，而小型的海狸（E，G和F）只能顺时针绕过1把椅子。在三个回合后，哪几把椅子会空着？',
        'image':'noc/202319.png',
        'choices':['A.2号和7号','B.3号和7号','C.1号和2号','D.1号和3号'],
        'correct':['A.'],
        'explanation':'[2023r1]'
    },

    {
        'question':'20/55[单选题]. 海狸麦莉坐在山顶上，山上有三条瀑布汇聚成一条河流。麦莉可以往任意一条瀑布中放入一根胡萝卜、一根木头或条鱼。这些河流上有几座桥，每座桥都有水怪。水怪有一种超能力：可以替换流经桥下的物品，如当胡萝下流经①号瀑布下的第一座桥时，水怪将胡萝卜替换为鱼，其他如右图所示。海狸佳佳坐在河的尽头，等待从河中收到物品。如果海狸佳佳想要收到一根木头，海狸麦莉最初应该往哪条瀑布放入哪种物品（）',
        'image':'noc/202320.png',
        'choices':['A.在①号瀑布中放一条鱼','B.在②号瀑布中放一条鱼','C.在②号瀑布中放一根胡萝卜','D.在③号瀑布中放一根胡萝卜'],
        'correct':['B.在②号瀑布中放一条鱼'],
        'explanation':'[2023r1]'
    },

    {
        'question':'21/55「单选题]. 鲍比班上的学生打算体育课到操场踢足球，但需要满足三个条件：<br>(1）只能在晴天踢足球;<br>(2)只有当风速低于20km/h时，学校才允许进行户外活动；<br>(3)没有其他班级预定操场。<br>于是，鲍比班上的学生决定先了解下周的天气和操场的预定情况。下周的天气预报如下图所示：鲍比班上的学生下周哪天可以在体育课上去操场踢足球？',
        'image':'noc/202321.png',
        'choices':['A.星期一','B.星期二','C.星期三','D.星期四'],
        'correct':['D.星期四'],
        'explanation':'[2023r1]'
    },

    {
        'question':'22/55[单选题]. 以下python代码的输出是什么？（）<br>numbers = [1, 2, 3, 4]<br>numbers.append([5, 6, 7, 8])<br>print(len(numbers))',
        'image':'',
        'choices':['A.4','B.5','C.8','D.12'],
        'correct':['B.5'],
        'explanation':'[2023r1]'
    },

    {
        'question':'23/55[单选题]. 下面关于return说法正确的是',
        'image':'',
        'choices':['A.python函数中必须有return','B.return可以返回多个值','C.return没有返回值时，函数自动返回Null','D.执行到return时，程序将停止函数内return后面的语句'],
        'correct':['B.return可以返回多个值'],
        'explanation':'[2023r1]python执行到return语句时，会退出函数，return之后的语句不再执行。但将return语句放在try语句块中，是个例外'
    },

    {
        'question':'24/55[单选题]. x =12.34<br>print(type(x))',
        'image':'',
        'choices':['A.<class \'str\' >','B.<class \'float\' >','C.<class \'bool\' >','D.<class \'int\' >'],
        'correct':['B.<class \'float\' >'],
        'explanation':'[2023r1]'
    },

    {
        'question':'25/55[单选题]. 在Python3中，有关于break的用法，下列代码输出是（）<br>for i in \'python\':<br>&nbsp;&nbsp;if i == \'h\':<br>&nbsp;&nbsp;&nbsp;&nbsp;break<br>&nbsp;&nbsp;print(i)',
        'image':'',
        'choices':["A.'p','y','t','h','o','n'","B.'p','y','t'","C.'p',y','t','h'","D.pyt"],
        'correct':["D.pyt"],
        'explanation':'[2023r1]p<br>y<br>t'
    },

    {
        'question':'26/55[单选题]. 厨师要为晚餐准备两道菜，他不想让两道菜相似，在厨师看来，如果使用了两种及以上的相同食材，这两道菜就会相似。上面哪两道菜是相似的？',
        'image':'noc/202326.png',
        'choices':['A.鸡汤和意大利面','B.鸡汤和核桃沙拉','C.鸡汤和鸡蛋沙拉','D.核桃沙拉和蛋糕'],
        'correct':['C.鸡汤和鸡蛋沙拉'],
        'explanation':'[2023r1]'
    },

    {
        'question':'27/55[单选题]. 有一个怪物藏在地牢里，下面是地牢的地图。灰色格子是怪物无法通过的墙壁，黄色格子是怪物可能藏身的地方。如果想要抓住怪物，可以点击格子，在格子里放置红块，来阻断地牢的通路。当怪物只能藏在一个格子（无法通向其他格子）时就能抓住怪物。请问最少需要放置几个红块，就能抓住怪物？（）',
        'image':'noc/202327.png',
        'choices':['A.2个','B.4个','C.6个','D.8个'],
        'correct':['C.6个'],
        'explanation':'[2023r1]'
    },

    {
        'question':'28/55[单选题]. 下图的网格中，骑士用K表示，还有8个标记为A的方格，骑士每次移动，可以到达标记A的任何一个位置。假设有3个3X3的网格，通过两座桥连接，每座桥的长度为2个方格，骑士要从初始位置K到达终点位置X，且确保他始终在方格中或桥梁中，请问骑士至少需要移动几次？',
        'image':'noc/202328.png',
        'choices':['A.6次','B.7次','C.8次','D.9次'],
        'correct':['A.6次'],
        'explanation':'[2023r1]'
    },

    {
        'question':'29/55[单选题]. 海狸学校的海狸们根据他们在比赛中犯下错误的数量，排成特殊的队形。规则是，上面的数字总是小于下面的两个数字，且同一结点下左边的数字大于右边的数字。本尼犯了7个错误，但他来晚了。他站在灰色位置，这是违反规则的。为了恢复队形，他反复与上方的海狸交换位置，直到再次符合规则。最后正确的队形是什么（）',
        'image':'noc/202329.png',
        'choices':['A.','B.','C.','D.'],
        'correct':['A.'],
        'explanation':'[2023r1]'
    },

    {
        'question':'30/55[单选题]. 安、本、查理、丹尼四只海狸都有红色保龄球和白色保龄球。他们需要从左向右依次将7个保龄球排成一排。排列规则如下：<br>(1）从左向右数，第3个保龄球必须是红色的；<br>(2）如果数到一个红色的保龄球，那么下一个保龄球也必须是红色的。<br>下图为安、本、查理、丹尼排列的保龄球。请问排保龄球时，谁没有遵守规则（）',
        'image':'noc/202330.png',
        'choices':['A.安','B.本','C.查理','D.丹尼'],
        'correct':['D.丹尼'],
        'explanation':'[2023r1]'
    },

    {
        'question':'31/55[多选题]. Python数据类型中属于数字类型的是（）',
        'image':'',
        'choices':['A.int','B.float','C.complex','D.list'],
        'correct':['A.int','B.float'],
        'explanation':'[2023r1]'
    },

    {
        'question':'32/55[多选题]. 以下选项中符合Python语言变量命名规则的是（）',
        'image':'',
        'choices':['A.TempStr','B._AI','C.K','D.3_1'],
        'correct':['A.TempStr','B._AI','C.K'],
        'explanation':'[2023r1]'
    },

    {
        'question':'33/55[多选题]. d={\"大海\"：\"蓝色\"，\"天空\"：\"灰色\"，\"大地\"：\"黑色\"}<br>print(d[\"大地\"],d.get(\"大地\",\"黄色\"))',
        'image':'',
        'choices':['A.黑色 黄色','B.黑色 灰色','C.黑色 蓝色','D.黑色 黑色'],
        'correct':['D.黑色 黑色'],
        'explanation':'[2023r1]'
    },

    {
        'question':'34/55[多选题]. 以下关于组合数据类型的描述，正确的是（）',
        'image':'',
        'choices':['A.字典类型的键可以用的数据类型包括字符串，元组以及列表','B.python的集合类型跟数学中的集合概念一致，都是多个数据项的无序组合','C.集合类型是一种具体的数据类型','D.序列类型和映射类型都是一类数据类型的总称'],
        'correct':['C.集合类型是一种具体的数据类型','D.序列类型和映射类型都是一类数据类型的总称'],
        'explanation':'[2023r1]正确答案是 C 和 D。C. 集合类型是一种具体的数据类型，这是正确的。在Python中，集合（set）是一个无序的不重复元素序列。D. 序列类似和映射类型都是一类数据类型的总称，这也是正确的。在Python中，序列类型（如列表、元组和字符串）和映射类型（如字典）是两类不同的数据结构类型。A. 字典类型的键可以使用的数据类型实际上是不可变类型，如字符串和元组，但不包括列表，因为列表是可变的。B. Python的集合类型与数学中的集合概念类似，但并不完全一致。在Python中，集合是可变的，这意味着可以添加或删除元素，而数学中的集合通常是不可变的。此外，Python的集合在底层实现上可能会有所不同，但它们确实表示无序的数据集合。'
    },

    {
        'question':'36/55「多选题]. 给出如下代码，以下选项中描述正确的是<br>import random<br>num = random.randint(1, 10)<br>while True:<br>&nbsp;&nbsp;if num >= 9:<br>&nbsp;&nbsp;&nbsp;&nbsp;break<br>&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;num = random.randint(1, 10)',
        'image':'',
        'choices':['A.random.randint (1,10)生成 [1,10] 之间的整数','B.import random代码是可以省略的','C.这段代码的功能是程序自动猜数字','D.while True:创建了一个永远执行的循环'],
        'correct':['C.这段代码的功能是程序自动猜数字','D.while True:创建了一个永远执行的循环'],
        'explanation':'[2023r1]'
    },

    {
        'question':'37/55[多选题]. 凯特想买一件连衣裙，但是她的需求比较特殊。首先，连衣裙必须是短袖；其次，连衣裙的扣子数要大于3个；最后，袖子上要带有星星。下图中四家商店出示的连衣裙，哪家没有凯特想要买的款式？（）',
        'image':'noc/202337.png',
        'choices':['A.BeaverYorker','B.BeaverNova','C.B&B','D.TomTeaver'],
        'correct':['A.BeaverYorker','D.TomTeaver'],
        'explanation':'[2023r1]'
    },

    {
        'question':'38/55[多选题]. 在Python中对两个集合对象实行操作A&B,得到的结果不会是()',
        'image':'',
        'choices':['A.并集','B.交集','C.差集','D.异或集'],
        'correct':['A.并集','C.差集','D.异或集'],
        'explanation':'[2023r1]'
    },

    {
        'question':'39/55[多选题]. 运行下面代码，随机结果不可能出现的选项是（）<br>import random<br>print(int(random.random() * 100 + 99))',
        'image':'',
        'choices':['A.222','B.98','C.120','D.199'],
        'correct':['A.222','B.98','D.199'],
        'explanation':'[2023r1]random.random() 生成的浮点数范围是 0.0 <= X < 1.0'
    },

    {
        'question':'40/55[多选题]. 下面代码的执行结果错误的是(）<br>if -1:<br>&nbsp;&nbsp;print(\"True.\")<br>else:<br>&nbsp;&nbsp;print(\"False.\")',
        'image':'',
        'choices':['A.-1','B.True','C.False','D.0'],
        'correct':['A.-1','C.False','D.0'],
        'explanation':'[2023r1]非零的数字作为条件判断时，都为真，0 为假'
    },

    {
        'question':'41/55[判断题]. 下面代码的输出结果是 1 1000。（）<br>x=10<br>y=3<br>print(x%y, x**y)',
        'image':'',
        'choices':['A.正确','B.错误'],
        'correct':['A.正确'],
        'explanation':'[2023r1]'
    },

    {
        'question':'42/55[判断题]. 下面代码的输出结果是“北京大学”。<br>x={\"姓名\":\"小花\"\"学校\":\"北京大学\"}<br>print(x.pop(\"学校\",\"abcd\"))',
        'image':'',
        'choices':['A.正确','B.错误'],
        'correct':['A.正确'],
        'explanation':'[2023r1]'
    },

    {
        'question':'43/55[判断题]. print(\'y\'<\'x\' == False) 的结果是True。',
        'image':'',
        'choices':['A.正确','B.错误'],
        'correct':['B.错误'],
        'explanation':'[2023r1]'
    },

    {
        'question':'44/55 [判断题]. 浮点数是小数在Python中的表达方式之一。在Python中，浮点数默认为单精度的浮点数。',
        'image':'',
        'choices':['A.正确','B.错误'],
        'correct':['B.错误'],
        'explanation':'[2023r1]Python中的浮点数默认为双精度（double-precision）浮点数，而不是单精度。Python使用双精度浮点数来提供更高的精度和范围。'
    },

    {
        'question':'45/55[判断题]. 元组可以作为字典的“键”。',
        'image':'',
        'choices':['A.正确','B.错误'],
        'correct':['B.错误'],
        'explanation':'[2023r1]'
    },

    {
        'question':'46/55[判断题]. 3+4j 是合法Python数字类型。',
        'image':'',
        'choices':['A.正确','B.错误'],
        'correct':['A.正确'],
        'explanation':'[2023r1]在Python中，3+4j 是一个合法的复数表示。Python内置了对复数的支持，使用 j 或 J 来表示复数的虚部。所以，3+4j 表示一个实部为3，虚部为4的复数。'
    },

    {
        'question':'47/55[判断题]. 执行以下程序，输出结果是12。（）<br>n=0<br>for i in range(1, 22,2):<br>&nbsp;&nbsp;n=n+ 1<br>print(n)',
        'image':'',
        'choices':['A.正确','B.错误'],
        'correct':['B.错误'],
        'explanation':'[2023r1]'
    },

    {
        'question':"49/55[填空题]. 执行以下代码，输出结果为<br>for a in 'mirror':<br>&nbsp;&nbsp;print(a, end=\"\")<br>&nbsp;&nbsp;if a == 'r':<br>&nbsp;&nbsp;&nbsp;&nbsp;break",
        'choices':['A.mir','B.aaa','C.aa','D.mi'],
        'correct':['A.mir'],
        'explanation':'[2023r1]先打印，再判断'
    },

    {
        'question':'50/55[填空题]. x=2.6，则表达式round(x)的值为',
        'choices':['A.2.6','B.3','C.2','D.2.5'],
        'correct':['B.3'],
        'explanation':'[2023r1]四舍五入'
    },

    {
        'question':'51/55[填空题]. 执行print(1 + 2 * 2 + 6 / 3) 的结果为',
        'choices':['A.4','B.7.0','C.7','D.4.0'],
        'correct':['B.7.0'],
        'explanation':'[2023r1]整除操作符是//，/是浮点除'
    },

    {
        'question':'52/55[填空题]. 循环语句 for i in range(8,-4,-2)执行了几次循环',
        'choices':['A.6','B.7','C.5','D.0'],
        'correct':['A.6'],
        'explanation':'[2023r1]range 含头不含尾'
    },

    {
        'question':'53/55[填空题]. 切片选取的区间是___型的，不包括结束位的值',
        'choices':['A.左开右闭','B.左闭右开','C.左开右开','D.左闭右闭'],
        'correct':['B.左闭右开'],
        'explanation':'[2023r1]'
    },

    {
        'question':'54/55[填空题]. 下面代码的输出结果是<br>x=1<br>x *= 3+5**2<br>print(x)',
        'choices':['A.16','B.13','C.28','D.35'],
        'correct':['C.28'],
        'explanation':'[2023r1]5**2 == 5 * 5'
    },

    {
        'question':'55/55[填空题]. 阅读以下程序，程序运行后会输出几个 hello<br>n= 2<br>while n < 5:<br>&nbsp;&nbsp;print(\"hello\")<br>&nbsp;&nbsp;n=n+1',
        'choices':['A.2','B.3','C.4','D.5'],
        'correct':['B.3'],
        'explanation':'[2023r1]'
    },

    {
        'question':'print(pow(3, 2)) 的输出结果是?( ) ',
        'choices':['A.3','B.2','C.8','D.9'],
        'correct':['D.9'],
        'explanation':'pow(x, y) 是 Python 中的一个标准数学函数，用于进行幂运算，会返回 x 的 y 次方。'
    },

    {
        'question':'. 代码 print( 10 / 2 == 5.0) 输出的结果是?( )',
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
        'question':'执行下面的代码，正确的结果为( ). <br>list = [1, 2, 3]<br>for i in range(2):<br>&nbsp;&nbsp;list.append(4)<br>&nbsp;&nbsp;list.pop(0)<br>print(list)',
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
        'question':'运行下方代码段，输出的结果是( ). <br>import numpy<br>a = numpy.arange(4)<br>b = [2]<br>print(a*b)',
        'choices':['A.8','B.[2*4]','C.[ 0 2 4 6 ]','D.[ 2 4 6 8 ]'],
        'correct':['C.[ 0 2 4 6 ]'],
        'explanation':'变量 a 的值为：[0 1 2 3 ]，变量 b 的值为：[2]. ，print 打印执行的计算式 a*b 的结果为[ 0 2 4 6]。'
    },

    {
        'question':'下列关于 Python 数据处理功能的叙述中，错误的是( )。',
        'choices':['A.一维数据是由对等关系的有序或无序数据构成，采用线性方式组织','B.二维数据是由多个一维数据构成，是一维数据的组合形式','C.高维数据是仅利用最基本的二元关系展示数据间的复杂结构','D.利用 Python 进行数据处理时，直接修改和覆盖原始数据文件是一种高效的数据处理习惯'],
        'correct':['D.利用 Python 进行数据处理时，直接修改和覆盖原始数据文件是一种高效的数据处理习惯'],
        'explanation':'利用 Python 进行数据处理时，不应该直接修改原始数据文件。避免误操作后破坏原始数据。'
    },

    {
        'question':'运行下方代码段，下列叙述中正确的是( ). <br>seq = eval(input())<br>if len(seq)>3:<br>&nbsp;&nbsp;seq.pop()<br>else:<br>&nbsp;&nbsp;seq.append(\'5\')<br>print(seq)',
        'choices':['A.输入[1,2,3,4]，输出[1, 2, 3]','B.输入(4,5,6,7)，输出(4, 5, 6)','C.输入[1,3]，输出[1, 3, 5]','D.输入(5,5)，输出(5, 5, 5)'],
        'correct':['A.','D.'],
        'explanation':'首先 函数 eval() 将输入的字符串转换为 python 对应到的数据类型，再判断变量的长度是否大于 3，若成立，则删除变量的最后一项；否则将字符串 \'5\' 添加到变量的最后。选项 A，输入[1,2,3,4]，判断成立，输出[1, 2, 3]；选项 B，输入(4,5,6,7)，判断成立，执行至 seq.pop()，程序报错，元组没有 pop()方法；选项 C，输入[1,3]，判断不成立，输出[1, 3, \'5\']；选项 D，输入(5,5)，判断不成立，执行 seq.append(\'5\')，程序报错，元组没有 append()方法'
    },

    {
        'question':'将列表 [1, 3, 0, 4, 2, 6, 5]. 进行排序，并将过程中的结果打印如下: <br>[1, 3, 0, 4, 2, 6, 5]<br>[1, 3, 0, 4, 2, 6, 5]<br>[0, 1, 3, 4, 2, 6, 5]<br>[0, 1, 3, 4, 2, 6, 5]<br>[0, 1, 2, 3, 4, 6, 5]<br>[0, 1, 2, 3, 4, 6, 5]<br>[0, 1, 2, 3, 4, 5, 6]<br>请问使用的是一下那种排序算法呢?',
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
        'question':'运行下方代码段，输出的结果是( ). <br>import numpy<br>a = numpy.arange(3,8)<br>b = [3]<br>print(a-b)',
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
        'question':'[多选]. 哪个选项对 turtle.done()的描述是正确的?( )',
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
        'question':'[多选]. 现有 PAI = 3.1415926 作为浮点数变量，下列代码可以将 PAI 保留三位小数并输出的 是?',
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
        'explanation':'字符串切片的格式为 str[开始索引:结束索引]. ，并且在切片操作中，结束索引的值不取。'
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

    {
        "question":"1/40[单选题]下列关于input()说法错误的是？",
        "choices":["A.提示信息应该写在input后面的小括号内","B.提示信息的内容为字符串时，可以不需要用引号包裹","C.返回的数据为字符串类型","D.当输入数字时，返回的数据依然是字符串类型"],
        "correct":["B.提示信息的内容为字符串时，可以不需要用引号包裹"],
        "explanation":"[2024r1]"
    },

    {
        "question":"2/40 [单选题]已知代码：num=input('请输入数量：'），变量num的数据类型为？（）",
        "choices":["A.整数类型","B.浮点数类型","C.字符串类型","D.布尔类型"],
        "correct":["C.字符串类型"],
        "explanation":"[2024r1]"
    },

    {
        "question":"3/40 [单选题]已知代码：print('兔子',3,'只')，运行后输出的结果为？（）",
        "choices":["A.兔子3只","B.兔子,3,只","C.'兔子',3,'只'","D.'兔子'3'只'"],
        "correct":["A.兔子3只"],
        "explanation":"[2024r1]"
    },

    {
        "question":"4/40[单选题]以下选项中，正确使用print()指令的是？",
        "choices":["A.print('number': 123456)","B.print[159]","C.print(6; 89)","D.print(\"123\")"],
        "correct":["D.print(\"123\")"],
        "explanation":"[2024r1]"
    },

    {
        "question":"5/40[单选题]下列选项中，数据类型为整数的是？",
        "choices":["A.0.1","B.2","C.'False'","D.False"],
        "correct":["B.2"],
        "explanation":"[2024r1]"
    },

    {
        "question":"6/40[单选题]下列算术运算符中表示整除的是？（）",
        "choices":["A.+","B./","C.%","D.//"],
        "correct":["D.//"],
        "explanation":"[2024r1]"
    },


    {
        "question":"7/40 [单选题]用于判断两个数不相等，应该使用什么运算符？（）",
        "choices":["A.<=","B.>","C.!=","D.=="],
        "correct":["C.!="],
        "explanation":"[2024r1]"
    },

    {
        "question":"8/40 [单选题]下列选项中，运算结果小于20的是？（）",
        "choices":["A.print(25%6+37*2)","B.print(89-72%9)","C.print(86//6+12%5)","D.print(4*8-18%7)"],
        "correct":["C.print(86//6+12%5)"],
        "explanation":"[2024r1]"
    },

    {
        "question":"9/40[单选题]下列变量的创建，正确的是？（）",
        "choices":["A.num=123","B.123:'***'","C.n==123","D.True = 'name'"],
        "correct":["A.num=123"],
        "explanation":"[2024r1]"
    },

    {
        "question":"10/40[单选题]下列选项中，变量命名正确的是？（）",
        "choices":["A.%k=10","B.7rw=123","C.u_o='blue'","D.u 9='苹果'"],
        "correct":["C.u_o='blue'"],
        "explanation":"[2024r1]"
    },

    {
        "question":"11/40 [单选题]代码如下，下列哪一项是代码最后一次输出的结果？（）<br>n=2<br>while n < 10:<br>&nbsp;&nbsp;n=n*4<br>&nbsp;&nbsp;print(n)",
        "choices":["A.2","B.4","C.10","D.32"],
        "correct":["D.32"],
        "explanation":"[2024r1]"
    },

    {
        "question":"12/40[单选题]直到程序结束，下方代码共循环了多少次？（）<br>n=2<br>while n < 10:<br>&nbsp;&nbsp;if n >= 7:<br>&nbsp;&nbsp;&nbsp;&nbsp;n=n%3<br>&nbsp;&nbsp;n=n*3<br>print(n)",
        "choices":["A.4次","B.3次","C.2次","D.1次"],
        "correct":["C.2次"],
        "explanation":"[2024r1]"
    },

    {
        "question":"13/40[单选题]横线处填写什么内容才能使最终结果输出8？（）<br>num = 1<br>while num < 8:<br>&nbsp;&nbsp;______<br>print(num)",
        "choices":["A.num = num + 2","B.num = num * 2","C.num = num // 2","D.num = num % 2"],
        "correct":["B.num = num * 2"],
        "explanation":"[2024r1]"
    },

    {
        "question":"14/40 [单选题]下列程序的运行结果为？（）<br>m= 4<br>while m < 10:<br>&nbsp;&nbsp;if m> 5:<br>&nbsp;&nbsp;&nbsp;&nbsp;m =m%2<br>&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;m= m*3<br>print(m)",
        "choices":["A.0","B.4","C.12","D.无输出结果"],
        "correct":["C.12"],
        "explanation":"[2024r1]"
    },

    {
        "question":"15/40 [单选题]已知下方代码，如果输入的颜色为'orange’，下列哪一项为正确的输出结果？（）<br>n=input('颜色：')<br>sum = 8<br>if n == 'red':<br>&nbsp;&nbsp;sum = sum *6<br>if n == 'yellow':<br>&nbsp;&nbsp;sum = sum // 3<br>if n == 'orange':<br>&nbsp;&nbsp;sum = sum + 2*sum<br>print(sum)",
        "choices":["A.8","B.48","C.2","D.24"],
        "correct":["D.24"],
        "explanation":"[2024r1]"
    },

    {
        "question":"16/40[单选题]已知下方代码，下列哪一项为正确的输出结果？<br>s = 'apple'<br>if s == 'apple':<br>&nbsp;&nbsp;print(苹果)<br>print(水果)",
        "choices":["A.苹果","B.水果","C.苹果<br>水果","D.水果<br>苹果"],
        "correct":["C.苹果<br>水果"],
        "explanation":"[2024r1]"
    },

    {
        "question":"17/40 [单选题]已知下方代码，下列哪一项为正确的输出结果？<br>n= 126<br>if n>58<br>&nbsp;&nbsp;print('大')<br>else:<br>&nbsp;&nbsp;print(小)<br>print(无法判断)",
        "choices":["A.大","B.大<br>小","C.报错","D.小"],
        "correct":["A.大"],
        "explanation":"[2024r1]"
    },

    {
        "question":"18/40[单选题]下列选项中，符合if-else语句基本结构的是？（）",
        "choices":["A.if 判断条件:<br>&nbsp;&nbsp;代码块1<br>else:<br>代码块2","B.if 判断条件:<br>&nbsp;&nbsp;代码块1<br>else:<br>&nbsp;&nbsp;代码块2","C.if 判断条件<br>&nbsp;&nbsp;代码块1<br>else<br>&nbsp;&nbsp;代码块2","D.if判断条件:<br>代码块1<br>else:<br>代码块2"],
        "correct":["B.if 判断条件:<br>&nbsp;&nbsp;代码块1<br>else:<br>&nbsp;&nbsp;代码块2"],
        "explanation":"[2024r1]"
    },

    {
        "question":"19/40 [单选题]已知下方代码，下列哪一项为正确的输出结果？<br>i=0<br>n=8<br>while i <= 5:<br>&nbsp;&nbsp;if n<10:<br>&nbsp;&nbsp;&nbsp;&nbsp;i=i+4<br>&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;i=i+6<br>&nbsp;&nbsp;n=n+i<br>print(n)",
        "choices":["A.8","B.12","C.22","D.14"],
        "correct":["C.22"],
        "explanation":"[2024r1]"
    },

    {
        "question":"20/40[单选题]已知下方代码，当输入的数字为34时，下列哪一项是正确的输出结果？（）s=input('数字：')<br>if s == 34:<br>&nbsp;&nbsp;print(34//5)<br>else:<br>&nbsp;&nbsp;print(34%6)",
        "choices":["A.4","B.6","C.4<br>6","D.无运行结果"],
        "correct":["A.4"],
        "explanation":"[2024r1]"
    },

    {
        "question":"21/40 [单选题]下列程序的运行结果为？（）numbers = [1, 2, 3]<br>for num in numbers:<br>&nbsp;&nbsp;if num % 2 == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(1,num * 2)<br>&nbsp;&nbsp;if num % 3 == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(2,num * 3)<br>&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(3,num // 4)",
        "image":"noc/mock27.png",
        "choices":["A.3 0<br>1 4<br>3 0<br>2 9","B.3 0<br>3 0<br>1 4<br>2 9","C.2,9<br>1,4<br>3,0<br>3,0","D.9<br>4<br>0<br>0"],
        "correct":["A.3 0<br>1 4<br>3 0<br>2 9"],
        "explanation":"[2024r1]"
    },

    {
        "question":"22/40 [单选题]下列程序的运行结果为？（）<br>numbers = [1, 2, 3, 4]<br>sum = 0<br>for num in numbers:<br>&nbsp;&nbsp;sum = sum + 1<br>&nbsp;&nbsp;for i in range(num):<br>&nbsp;&nbsp;&nbsp;&nbsp;if i % 2 == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum = sum + i<br>print(sum)",
        "choices":["A.0","B.2","C.4","D.8"],
        "correct":["D.8"],
        "explanation":"[2024r1]"
    },

    {
        "question":"23/40 [单选题]下列程序的运行结果为？（）<br>num = 1<br>for i in range(3,18):<br>&nbsp;&nbsp;if i % 2 == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;num = num * 2<br>&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;num = num // 2<br>print(num)",
        "choices":["A.0","B.1","C.2","D."],
        "correct":["B.1"],
        "explanation":"[2024r1]"
    },

    {
        "question":"24/40[单选题]运行下列程序共执行了多少次？（）<br>for i in range(1,4):<br>&nbsp;&nbsp;for j in range(1,4,2):<br>&nbsp;&nbsp;&nbsp;&nbsp;if i*j>6:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print('i*j',i*j)<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print('i%j',i%j)",
        "choices":["A.12次","B.6次","C.9次","D.16次"],
        "correct":["B.6次"],
        "explanation":"[2024r1]"
    },

    {
        "question":"25/40[单选题]运行下列程序，最后一次的输出结果为？（）nums = [1, 4,7,23]<br>strs = [2, 4, 7, 9]<br>for n in nums:<br>&nbsp;&nbsp;for s in strs:<br>&nbsp;&nbsp;&nbsp;&nbsp;if n == s:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(s % 3)",
        "choices":["A.0","B.1","C.2","D.3"],
        "correct":["A.","D."],
        "explanation":"[2024r1]"
    },

    {
        "question":"26/40 [多选题]已知变量weight=12.5表示重量为12.5kg，变量price=6表示邮费，下列选项中，可以实现重量大于等于10kg的物品，需要支付1.5倍邮费，否则，正常支付邮费的代码是？（）",
        "choices":["A.if weight >= 10:<br>&nbsp;&nbsp;print('邮费：',1.5*price)<br>else:<br>&nbsp;&nbsp;print('邮费：',price)","B.if weight<10:<br>&nbsp;&nbsp;print('邮费：'1.5*price)<br>else:<br>&nbsp;&nbsp;print('邮费：';price)","C.if weight >= 10:<br>&nbsp;&nbsp;print('邮费：',1.5*price)<br>if weight < 10:<br>&nbsp;&nbsp;print('邮费：',price)","D.if weight >= 10:<br>&nbsp;&nbsp;print('邮费：',1.5*price)<br>if weight <10:<br>&nbsp;&nbsp;print('邮费：',0.5*price)"],
        "correct":["A.if weight >= 10:<br>&nbsp;&nbsp;print('邮费：',1.5*price)<br>else:<br>&nbsp;&nbsp;print('邮费：',price)","C.if weight >= 10:<br>&nbsp;&nbsp;print('邮费：',1.5*price)<br>if weight < 10:<br>&nbsp;&nbsp;print('邮费：',price)"],
        "explanation":"[2024r1]"
    },

    {
        "question":"27/40 [多选题]下列代码运行后，两次输出sum的值分别是多少？（）<br>n=5<br>sum = 0<br>while n < 10:<br>&nbsp;&nbsp;n=n+2<br>&nbsp;&nbsp;if sum == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;sum = sum + n<br>&nbsp;&nbsp;&nbsp;&nbsp;print(sum)<br>&nbsp;&nbsp;sum = sum * 2<br>print(sum)",
        "choices":["A.第一次输出的sum值为：0","B.第一次输出的sum值为：7","C.第二次输出的sum值为：56","D.第二次输出的sum值为：14"],
        "correct":["B.第一次输出的sum值为：7","C.第二次输出的sum值为：56"],
        "explanation":"[2024r1]"
    },

    {
        "question":"28/40 [多选题]已知横线处代码用于循环生成0到numbers[i]之间（包含0不包含numbers[i]）的整数序列，下列选项中可以实现该功能的是？（）<br>numbers = [11,28, 76]<br>sum = 0<br>for i in range(len(numbers):<br>&nbsp;&nbsp;if numbers[i] % 2 == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;_____________<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if j % 2 == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum = sum + 2*j<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum = sum + i%2<br>print(sum)",
        "choices":["A.for j in range(numbers[i]):","B.for j in range(0,numbers[i],1):","C.for j in range(O,numbers[i]):","D.for j in range(len(numbers[i]):"],
        "correct":["A.for j in range(numbers[i]):","B.for j in range(0,numbers[i],1):","C.for j in range(O,numbers[i]):"],
        "explanation":"[2024r1]"
    },

    {
        "question":"29/40 [多选题]关于下列代码，说法正确的是？（）<br>nums = [3,2,1]<br>s=1<br>for n in nums:<br>&nbsp;&nbsp;for j in range(n):<br>&nbsp;&nbsp;&nbsp;&nbsp;if j // 2 == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s=s*2<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s=s *4<br>print(s)",
        "choices":["A.程序共循环了4次","B.程序共循环了6次","C.程序输出的结果为64","D.程序输出的结果为128"],
        "correct":["B.程序共循环了6次","D.程序输出的结果为128"],
        "explanation":"[2024r1]"
    },

    {
        "question":"30/40[多选题]已知列表foods=「蛋炒饭'，鱼香肉丝，凉拌黄瓜',面条]，判断列表中是否存在元素'炸鸡'的代码书写正确的是？",
        "choices":["A.for f in foods:<br>&nbsp;&nbsp;if f =='炸鸡':<br>&nbsp;&nbsp;&nbsp;&nbsp;print('有')","B.for f in foods:<br>if f == 炸鸡:<br>&nbsp;&nbsp;print('有')","C.n=0<br>while n < len(foods):<br>&nbsp;&nbsp;if foods[n] =='炸鸡':<br>&nbsp;&nbsp;&nbsp;&nbsp;print('有')<br>&nbsp;&nbsp;n=n+1","D.n=0<br>while n < len(foods):<br>&nbsp;&nbsp;if foods[n] =='炸鸡':<br>&nbsp;&nbsp;&nbsp;&nbsp;print('有')<br>&nbsp;&nbsp;&nbsp;&nbsp;n=n+1"],
        "correct":["A.for f in foods:<br>&nbsp;&nbsp;if f =='炸鸡':<br>&nbsp;&nbsp;&nbsp;&nbsp;print('有')","C.n=0<br>while n < len(foods):<br>&nbsp;&nbsp;if foods[n] =='炸鸡':<br>&nbsp;&nbsp;&nbsp;&nbsp;print('有')<br>&nbsp;&nbsp;n=n+1"],
        "explanation":"[2024r1]"
    },

    {
        "question":"31/40[判断题]while循环的循环体中只能写一行代码。（）",
        "choices":["A.正确","B.错误"],
        "correct":["B.错误"],
        "explanation":"[2024r1]"
    },

    {
        "question":"32/40[判断题]变量key和变量Key表示同一个变量。",
        "choices":["A.正确","B.错误"],
        "correct":["B.错误"],
        "explanation":"[2024r1]"
    },

    {
        "question":"33/40[判断题]在while循环的执行过程中，只有满足循环判断条件，才会执行循环体。",
        "choices":["A.正确","B.错误"],
        "correct":["A.正确"],
        "explanation":"[2024r1]"
    },

    {
        "question":"34/40[判断题]在if-else语句中，当判断条件为True时，程序会执行else中的代码块。",
        "choices":["A.正确","B.错误"],
        "correct":["B.错误"],
        "explanation":"[2024r1]"
    },

    {
        "question":"35/40[判断题]print(6)和print('6')输出的结果类型相同。",
        "choices":["A.正确","B.错误"],
        "correct":["A.正确"],
        "explanation":"[2024r1]"
    },

    {
        "question":"36/40[判断题]列表中的元素称为索引。",
        "choices":["A.正确","B.错误"],
        "correct":["B.错误"],
        "explanation":"[2024r1]"
    },

    {
        "question":"37/40[判断题]列表中的元素可以是浮点数。",
        "choices":["A.正确","B.错误"],
        "correct":["A.正确"],
        "explanation":"[2024r1]"
    },

    {
        "question":"38/40[判断题]range(0,8)和range(0,8,1)生成的整数序列相同。",
        "choices":["A.正确","B.错误"],
        "correct":["A.正确"],
        "explanation":"[2024r1]"
    },

    {
        "question":"39/40[判断题]len()函数可以用于获取列表的长度。",
        "choices":["A.正确","B.错误"],
        "correct":["A.正确"],
        "explanation":"[2024r1]"
    },

    {
        "question":"40/40[判断题]列表中元素的索引默认从0开始。",
        "choices":["A.正确","B.错误"],
        "correct":["A.正确"],
        "explanation":"[2024r1]"
    },

];
