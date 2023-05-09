import{_ as l,p as i,q as u,a1 as e}from"./framework-5866ffd3.js";const t={},_=e("<p></p><p> 报价采集重构 </p><ul><li> 说明 <ul><li> 报价采集模块，从汽车之家手机app接口采集汽车报价数据，分析后导入系统 </li></ul></li><li> 目标 <ul><li> 优化采集流程，降低采集过程中的资源使用，提高采集效率 </li></ul></li><li> 思路 <ul><li> 采集汽车之家app接口 <ul><li> 减少请求数量 </li></ul></li><li> 采集以每个车型为单位进行采集 <ul><li> 接口有分页限制 </li><li> 单页最大条数为100 </li></ul></li><li> 每个车型的数据都要备份，采集时如有变化才需要进行进一步分析 </li><li> 有变化则更新相应数据，并保留原始数据 <ul><li> 原始数据可以方便以后进行数据排查 </li></ul></li><li> 采集失败则需要记录日志，供快速发现问题 </li><li> 采集不再保存镜像表,在内存分析完毕后直接审核 </li><li> 确认采集完整后，直接删除原车型报价数据，用新数据替换 </li><li> 发布数据时需要线上将该表读写用缓存隔离 </li></ul></li><li> 场景描述 </li><li> 设计 <ul><li> 数据存储 <ul><li> 尽量存储原始数据 </li><li> 有需要的再进行数据映射 </li><li> 无法准确提取的数据，严格来说不应该支持提取 </li><li> 数据提取前要对数据有预期，超出预期后则需要记录日志 </li></ul></li><li> 任务日志 <ul><li> 数据提取异常 </li><li> 更新数据量与前几次差距超出50% </li><li> 数据完全无法提取 <ul><li> 需要记录日志 </li><li> 本次采集数据不可以导入 </li><li> 解决前不安排下次采集任务 </li></ul></li></ul></li><li> 过程 <ul><li> 采集和收集所有数据，并进行初步聚合 </li><li> 分析数据，生成各种日志，分析结果存储文件 <ul><li> 数据无异常则可以直接发布 </li><li> 有异常需要人工介入 </li><li> 本次采集无效 </li></ul></li><li> 编辑管理数据时，只能选择发布或，取消发布、删除。不再提供发布后编辑后草稿功能 </li><li> 数据无异常直接发布 </li><li> 发布过程 <ul><li> 线上数据接口全部启用缓存层，当发布时数据层不再提供新数据，直到发布完整 </li><li> 必须保证线上接口功能完整 </li><li> 不可以出现没有数据的情况 </li></ul></li></ul></li></ul></li><li> 采集步骤 <ul><li> 分发采集任务 </li><li> 收集采集结果 </li><li> 分析结果，采集失败需要进行重新安排采集 </li><li> 分析采集结果，并进行自动审核 <ul><li> 审核步骤是否还有必要存在 </li><li> 分析结果需要对比之前的版本数据，防止不必要的数据更新 </li></ul></li><li> 自动发布 <ul><li> 自动发布时会对db有较大压力 </li></ul></li></ul></li><li> 需要参与的人员 <ul><li> 自动采集 <ul><li> 采集到初始数据 </li></ul></li><li> 编辑人员 <ul><li> 需要审核和校验数据 </li></ul></li><li> 开发人员 <ul><li> 核对数据保证数据完整 </li><li> 当数据出现问题有足够的信息可以还原原始数据，并查找原因   </li></ul></li></ul></li></ul>",3),c=[_];function o(a,s){return i(),u("div",null,c)}const p=l(t,[["render",o],["__file","2014-509.html.vue"]]);export{p as default};
