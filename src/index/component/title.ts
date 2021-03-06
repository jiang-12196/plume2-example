export default {
	singleChoiceQuestion: [
		{
			title: "千米测试环境，为人员赋予哪种合适角色可以查看所有项目？",
			answer: "B",
			select: {
				A: "必须是千米测试环境管理员",
				B: "可以是千米测试环境成员",
				C: "必须是所有项目管理员",
				D: "所有项目成员"
			}
		}
	]
};

// 一、单选题
// 1. 千米测试环境，为人员赋予哪种合适角色可以查看所有项目？
// A. 必须是千米测试环境管理员
// B. 可以是千米测试环境成员
// C. 必须是所有项目管理员
// D. 所有项目成员

// 2. 已知某IP属于bugatti系统中负载，如何查询该IP对应项目？
// A. 个人配置→关系查询
// B. 个人配置→环境管理
// C. 个人配置→项目管理
// D. 任务中心→检索项目

// 3. 新增java项目到bugatti上部署，以下流程会导致首次不能正常部署的是？
// A. wiki登记项目信息→jenkins新建项目→jenkins打包发布→bugatti创建项目→项目绑定负载→bugatti部署项目
// B. wiki登记项目信息→jenkins新建项目→bugatti创建项目→jenkins打包发布→项目绑定负载→bugatti部署项目
// C. wiki登记项目信息→bugatti创建项目→项目绑定负载→jenkins新建项目→jenkins打包发布→bugatti部署项目
// D. wiki登记项目信息→bugatti创建项目→jenkins新建项目→jenkins打包发布→项目绑定负载→bugatti部署项目

// 4. 某项目组新增一个springboot类型的web服务，且该项目中有dubbo消费者但是没有dubbo提供者，在bugatti中创建项目时需要使用哪种类型的模板？
// A. ansible_springboot_dubbo
// B. ansible_springboot
// C. ansible_webapiui
// D. ansible_webapi

// 5. 以下哪些版本是可以升级到生产环境的？
// A. SNAPSHOT
// B. RELEASE
// C. beta
// D. 没有严格要求，任何版本都可以

// 6. 以下关于项目属性的说法正确的是
// A. 项目在创建时，项目属性就要确定，且不能更改
// B. 项目属性在所有环境中都是一致的，一旦修改，其他环境也跟着更改
// C. 项目属性是环境隔离的，不同环境，可以有不同的配置
// D. 以上说法都不正确

// 7. 关于项目配置文件，以下说法错误的是
// A. 项目必须先有版本，才能添加配置文件
// B. 项目添加配置文件后，可以生成模板作为以后版本的默认配置
// C. 项目配置文件跟版本没有关系，可以随意添加
// D. 当前部署版本没有配置时，会使用default中的配置文件

// 8. 非生产环境，项目成员对负载的操作权限说法错误的
// A. 任何项目成员都可以为项目新增负载机器
// B. 任何项目成员都能取消绑定负载机器
// C. 只有项目管理员可以取消绑定负载机器
// D. 绑定负载时，可以选择不同的数据中心

// 二、多选题
// 1. 以下哪些角色可对项目生产环境进行升级？
// A. 任何项目成员
// B. 项目管理员
// C. 生产环境管理员
// D. 系统管理员

// 2. 配置文件中可通过以下哪种方式引用到变量值
// A. attrs
// B. cHost
// C. alias
// D. dependence

// 3. 某项目在部署过程中发生错误，安装日志显示 “dependence.admin_parent.attrs.v_search_engine_url 变量未替换”，可能是何种原因？
// A. 该项目未依赖 admin_parent
// B. admin_parent 项目没有 v_search_engine_url 环境变量
// C. admin_parent 环境变量 v_search_engine_url 值为空
// D. 以上皆有可能

// 4. bugatti新建项目有几种版本管理方式？
// A. pom中添加 maven-ofpaybuild-plugins 依赖，配置goal notify-bugatti
// B. 非maven管理项目，发送post请求到 /v1/project/version 接口
// C. 项目可以手工添加版本号
// D. 新建项目时会有默认版本

// 5. jenkins打包成功，但是bugatti部署时发现并没有打包对应的版本，可能为何？
// A. 项目属性 groupId、artifactId 配置错误
// B. 先执行的jenkins打包，后创建的bugatti项目
// C. 项目中没有配置 maven-ofpaybuild-plugins 依赖
// D. nexus 服务出现异常

// 6. 项目在bugatti已经有版本显示，但是部署失败，日志显示下载war包时HTTP 404错误，可能是何种原因？
// A. 负载空间满了
// B. nexus版本包被定期清理了
// C. 项目属性 groupId、artifactId 配置错误
// D. 项目打包时只把版本号发送到bugatti，但是包没上传到nexus

// 7. 启动应用后，出现“检测http服务失败 请选择是否忽略此错误”弹窗，以下哪种操作是合理的？
// A. 登录负载查看应用进程、应用日志，确认应用启动是否正常，然后决定是否忽略错误
// B. 项目是通过bugatti启动的，肯定是bugatti原因，直接找bugatti开发定位问题
// C. 通过bugatti任务日志查看报错原因
// D. bugatti检测服务失败，应用一定不可用，需要重装

// 8. bugatti负载通过红、黄、绿三种颜色显示应用进程状态，以下描述正确的是？
// A. 绿色表示应用进程正常停止
// B. 红色表示应用进程意外停止
// C. 绿色表示应用进程状态正常
// D. 黄色表示应用进程状态正常

// 9. 项目联调过程中，添加负载时报“添加失败，没有足够空闲机器”时，可以
// A. 换个环境再添加负载
// B. 换个数据中心再添加负载
// C. 请运维组同事帮忙增加负载
// D. 将别人项目的负载解绑，再绑定到本项目

// 10. 关于创建项目配置的说法准确的是
// A. 创建项目时，模板可以随便选择，对项目使用无影响
// B. 创建项目时，应该根据模板名称和tips说明来选择模板
// C. 创建项目时，环境可以随便选择，对项目属性和项目环境变量配置无影响
// D. 创建项目时，应该按规划选择特定环境，因为会影响到环境变量配置

// 11. 以下关于项目环境变量的说法正确的是
// A. 项目在创建时，项目环境变量就要配置正确，且不能更改
// B. 项目环境变量在所有环境中都是一致的，一旦修改，其他环境也跟着更改
// C. 项目环境变量是环境隔离的，不同环境，可以有不同的配置
// D. 项目环境变量在所有环境中是同时存在的，一旦删除，其他所有环境也被删除

// 12. 关于项目成员角色权限说法正确的是
// A. 项目管理员可以通过工号把员工添加为项目成员
// B. 项目管理员可以把项目成员升级为管理员
// C. 项目管理员可以把其他管理员降级为普通成员
// D. 项目成员可以查看项目的管理员，并让管理员提升自己的角色

// 13. 申请开通项目灰度配置的正确做法是
// A. 申请开通灰度会影响项目的正常运行，所以没有必要申请开启灰度配置
// B. 申请开通灰度后，没有特殊的分流策略可以不用配置
// C. 开启七层检测的应用需要提供可返回响应的七层检测路径
// D. 开启七层检测的好处是可提前检查应用访问异常自动拦截用户请求

// 14. 进入bugatti任务中心，发现左侧项目显示不全，可能是什么原因？
// A. 被从项目成员中剔除了
// B. 当前环境中添加的项目不全
// C. 检索项目时选择了物理机IP过滤
// D. 检索项目时选择了产品过滤

// 15. bugatti中普通用户创建项目的入口是
// A. 个人配置→环境管理
// B. 任务中心→检索项目
// C. 个人配置→项目管理
// D. 普通人员无权限创建项目

// 16. 升级部署，正确的流程是
// A. 如果是新建项目，顺序是：bugatti新建项目→jenkins打包→bugatti部署升级→启动应用
// B. 如果是新建项目，没有特定先后顺序
// C. bugatti已有项目，可以直接用jenkins打包，到bugatti执行升级，启动应用
// D. bugatti已有项目，需要先停止应用才能执行升级，再启动应用

// 17. 某项目在开发环境配置了项目属性t_manage_port为9001，以下说法正确的是
// A. 可以在生产环境将该属性修改为其他值，对开发环境不影响
// B. 如果在其他环境修改该属性的值，那么开发环境中也会被修改
// C. 项目配置文件中可以通过引用{{alias.t_manage_port}}获取属性的值
// D. 项目配置文件中可以通过引用{{attrs.t_manage_port}}获取属性的值

// 18. 某项目在开发环境配置了项目环境变量v_env为dev，以下说法正确的是
// A. 可以在生产环境将该变量的值修改为prod，对开发环境不影响
// B. 如果在其他环境修改该属性的值，那么开发环境中也会被修改
// C. 项目配置文件中可以通过引用{{attrs.v_env}}获取变量的值
// D. 项目配置文件中可以通过引用{{cHost.v_env}}获取变量的值

// 19. 如果项目开启了灰度配置，以下说法正确的是
// A. 需要选择gray分组绑定负载才能实现灰度
// B. 开启灰度后，可以在高级选项中启用7层检测
// C. 不同的gray分组可以做不同的分流策略配置
// D. 开启灰度配置对项目无影响，可以随意配置分流策略

// 20. 新增java项目，以下配置做法正确的是
// A. 项目属性groupId和artifactId 需要跟项目主pom文件中配置保持一致
// B. 项目属性groupId和artifactId 需要跟部署模块子module pom文件中配置保持一致
// C. java打包格式支持jar/war形式，所以pom中随意定义一种打包格式都可部署
// D. 打包格式要按照约定来，tomcat web项目以war包格式，springboot项目以onejar格式

// 21. 已经打包的版本，但是在bugatti没有显示，可以做的操作有
// A. 查看项目属性groupId和artifactId配置是否正确
// B. 手工添加刚打包的项目版本
// C. 检查项目pom文件，是否配置maven-ofpaybuild-plugins
// D. 没有显示就再打包一次

// 22. 项目添加负载和分组，下面描述正确的是
// A. 项目添加负载时，必须选择相同的数据中心
// B. 项目添加负载时，只要数据中心有空闲机器，都可以添加
// C. 生产环境添加负载时，为防止单点故障，多个负载会被分配到不同的物理机
// D. 同一项目的不同负载，必须运行相同的版本

// 判断题
// 1. 新建项目时，无论选择哪个环境，最后在所有环境都可以看到该项目
// 2. 项目取消绑定负载时，默认勾选“销毁机器”，会被运维组统一销毁资源回收
// 3. 生产环境，为项目添加多负载时，bugatti会选择相同的物理机，便于项目管理负载
// 4. 同一负载可以一次点击多个操作加入到QUEUE中顺序执行，中间操作失败不影响后续操作执行
// 5. 项目创建后，发现模板类型选择错误，可以通过“项目管理→项目修改”重新选择模板类型
// 6. 项目创建后，发现模板类型选择错误，只能请系统管理员删除项目并重新创建
// 7. 项目管理员是可以把其他项目成员升级为项目管理员的，也可以把其他管理员降级成普通成员
// 8. bugatti推送配置文件时，安装版本对应的配置文件优先级高于default下面的配置文件
// 9. 已知CommonRedis项目有t_virtualIp变量用来配置虚拟IP供访问使用，某项目需要访问CommonRedis，可以直接在配置文件中配置{{CommonRedis.attrs.t_virtualIp}} 来引用CommonRedis的虚拟IP地址
// 10. bguatti配置文件不仅可以配置文本文件，还能用来上传二进制文件，如证书等
// 11. 点击强制安装会重装JDK、Tomcat等基础软件，比普通安装耗时
// 12. 配置文件在bugatti配置后，应用就能自动使用新配置了，不用再做其它操作
// 13. 配置文件中使用的变量是不区分大小写的
// 14. 不管是不是项目成员，只要是环境成员，就能看到当前环境的所有项目
// 15. bugatti项目必须在jenkins打包之前创建，否则会导致打包版本在bugatti无法显示
// 16. 项目修改模板后，项目属性和环境变量不用再重新配置
// 17. 项目停止失败时，确认需要可以通过强制停止功能来停止）
// 18. 项目绑定域名后，域名不可访问时，监控告警会发送到项目管理员手机上）
// 19. 项目1.0.1-beta版本可以在生产环境升级部署
// 20. 项目的版本号是可以在版本管理里面手工删除
