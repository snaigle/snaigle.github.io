import{_ as e,p as t,q as r,a1 as n}from"./framework-5866ffd3.js";const o={},i=n(`<p> lucene 是一个全文检索的纯java的工具，对中文分词支持不好，需要其他分词组件支持 如 ikanalysize , paoding ，je 等。 </p><p><br></p><p> lucene 的基本流程，首先需要建立索引  index , 然后就是搜索索引 search 。 </p><p><br></p><p><br></p><p> 下面放出一个入门的例子 </p><pre class="prettyprint lang-java linenums">public void testIndexAndSearchold() throws CorruptIndexException, LockObtainFailedException, IOException, ParseException{
  Analyzer analyzer = new StandardAnalyzer();
<p>// Store the index in memory:
Directory directory = new RAMDirectory();
// To store an index on disk, use this instead:
//Directory directory = FSDirectory.getDirectory(&quot;/tmp/testindex&quot;);
IndexWriter iwriter = new IndexWriter(directory, analyzer, IndexWriter.MaxFieldLength.LIMITED);
Document doc = new Document();
String text = &quot;This is the text to be indexed.&quot;;
doc.add(new Field(&quot;fieldname&quot;, text, Field.Store.YES,
Field.Index.ANALYZED));
iwriter.addDocument(doc);
iwriter.optimize();
iwriter.close();</p>
<p>// Now search the index:
IndexSearcher isearcher = new IndexSearcher(directory);
// Parse a simple query that searches for &quot;text&quot;:
QueryParser parser = new QueryParser(&quot;fieldname&quot;, analyzer);
Query query = parser.parse(&quot;text&quot;);
TopDocCollector hits = new TopDocCollector(0);
isearcher.search(query,hits);
assertEquals(1, hits.getTotalHits());
// Iterate through the results:
for (int i = 0; i &lt; hits.getTotalHits(); i++) {
Document hitDoc = isearcher.doc(i);
assertEquals(&quot;This is the text to be indexed.&quot;, hitDoc.get(&quot;fieldname&quot;));
}
isearcher.close();
directory.close();</p>
</pre><p><span style="white-space:pre;"></span>} </p>`,8),a=[i];function s(c,d){return t(),r("div",null,a)}const l=e(o,[["render",s],["__file","2010-41.html.vue"]]);export{l as default};
