import{_ as t,p,q as i,a1 as e}from"./framework-5866ffd3.js";const d={},n=e(`<div><div><div><div><h1> 在Ubuntu中安装Python科学计算环境 </h1> 文章 <a href="http://hyry.dip.jp/tech/slice/slice.html/24">转载</a><br><div><p> 和Python(x,y)不一样，在Ubuntu中需要手工安装科学计算的各个模块，本文介绍如何安装IPython, NumPy, SciPy, matplotlib, PyQt4, Spyder, Cython, SWIG, ETS, OpenCV。  </p></div></div></div></div></div><div><div><div><div><div><p> 在Ubuntu下安装Python模块通常可以使用apt-get和pip命令。apt-get命令是Ubuntu自带的包管理命令，而pip则是Python安装扩展模块的工具，通常pip会下载扩展模块的源代码并编译安装。 </p><p> Ubuntu 12.04中缺省安装了Python2.7.3，首先通过下面的命令安装pip，pip是Python的一个安装和管理扩展库的工具。 </p><div><div><pre>sudo apt-get install python-pip
</pre></div></div><p> 安装Python开发环境，方便今后编译其他扩展库，占用空间92.8M： </p><div><div><pre>sudo apt-get install python-dev
</pre></div></div><div><h1> IPython<a href="http://hyry.dip.jp/tech/slice/slice.html/24#ipython"></a></h1><p> 为了安装最新版的IPython 0.13beta，需要下载IPython源代码，并执行安装命令。在IPython 0.13beta中提供了改进版本的IPython notebook。下面的命令首先安装版本管理软件git，然后通过git命令从IPython的开发代码库中下载最新版本的IPython源代码，并执行安装命令： </p><div><div><pre>cd sudo apt-get install git
git clone https://github.com/ipython/ipython.git cd ipython
sudo python setup.py install
</pre></div></div><p> 如果安装目前的最新稳定版本，可以输入: </p><div><div><pre>sudo apt-get install ipython
</pre></div></div><p> 安装完毕之后，请输入ipython命令测试是否能正常启动。 </p><p> 为了让IPython notebook工作，还还需要安装tornado和pyzmq： </p><div><div><pre>sudo pip install tornado
sudo apt-get install libzmq-dev
sudo pip install pyzmq
sudo pip install pygments
</pre></div></div><p> 下面测试IPython： </p><div><div><pre>cd mkdir notebook cd notebook
ipython notebook
</pre></div></div><p> 为了在IPython中离线使用LaTeX数学公式，需要安装mathjax，首先输入下面的命令启动ipython notebook： </p><div><div><pre>sudo ipython notebook
</pre></div></div><p> 在IPython notebook界面中输入： </p><div><div><pre>from IPython.external.mathjax import install_mathjax install_mathjax() </pre></div></div></div><div><h1> NumPy，SciPy和matplotlib<a href="http://hyry.dip.jp/tech/slice/slice.html/24#numpy-scipymatplotlib"></a></h1><p> 通过apt-get命令可以快速安装这三个库： </p><div><div><pre>sudo apt-get install python-numpy
sudo apt-get install python-scipy
sudo apt-get install python-matplotlib
</pre></div></div><p> 如果需要通过pip编译安装，可以先用apt-get命令安装所有编译所需的库： </p><div><div><pre>sudo apt-get build-dep python-numpy
sudo apt-get build-dep python-scipy
</pre></div></div><p> 然后通过pip命令安装： </p><div><div><pre>sudo pip install numpy
sudo pip install scipy
</pre></div></div><div> 通过build-dep会安装很多库，包括Python 3.2。 </div></div><div><h1> PyQt4和Spyder<a href="http://hyry.dip.jp/tech/slice/slice.html/24#pyqt4spyder"></a></h1><p> 下面的命令安装PyQt4，Qt界面设计器，PyQt4的开发工具以及文档： </p><div><div><pre>sudo apt-get install python-qt4
sudo apt-get install qt4-designer
sudo apt-get install pyqt4-dev-tools
sudo apt-get install python-qt4-doc
</pre></div></div><p> 安装完毕之后，文档位于： </p><div><div><pre>/usr/share/doc/python-qt4-doc
</pre></div></div><p> 安装好PyQt4之后通过下面的命令安装Spyder： </p><div><div><pre>sudo apt-get install spyder
</pre></div></div><p> 由于Spyder经常更新，通过下面的命令可以安装最新版： </p><div><div><pre>sudo pip install spyder --upgrade
</pre></div></div></div><div><h1> cython和SWIG<a href="http://hyry.dip.jp/tech/slice/slice.html/24#cythonswig"></a></h1><p> Cython和SWIG是编写Python扩展模块的工具： </p><div><div><pre>sudo pip install cython
sudo apt-get install swig
</pre></div></div><p> 输入 cython --version 和 swig -version 查看版本。 </p></div><div><h1> ETS<a href="http://hyry.dip.jp/tech/slice/slice.html/24#ets"></a></h1><p> ETS是enthought公司开发的一套科学计算软件包，其中的Mayavi通过VTK实现数据的三维可视化。 </p><p> 首先通过下面的命令安装编译ETS所需的库： </p><div><div><pre>sudo apt-get install python-dev libxtst-dev scons python-vtk  pyqt4-dev-tools python2.7-wxgtk2.8 python-configobj
sudo apt-get install libgl1-mesa-dev libglu1-mesa-dev
</pre></div></div><p> 创建ets目录，并在此目录下下载ets.py，运行ets.py可以复制最新版的ETS源程序，并安装： </p><div><div><pre>mkdir ets cd ets
wget https://github.com/enthought/ets/raw/master/ets.py
python ets.py clone
sudo python ets.py develop #sudo python ets.py install    或者运行install安装 </pre></div></div><p> 如果一切正常，那么输入 mayavi2 命令则会启动mayavi。 </p></div><div><h1> OpenCV<a href="http://hyry.dip.jp/tech/slice/slice.html/24#opencv"></a></h1><p> 为了编译OpenCV需要下载cmake编译工具，和一些依赖库： </p><div><div><pre>sudo apt-get install build-essential
sudo apt-get install cmake
sudo apt-get install cmake-gui
sudo apt-get install libavcodec-dev libavformat-dev libswscale-dev
sudo apt-get install libjpeg-dev libpng-dev libtiff-dev libjasper-dev
</pre></div></div><p> 然后从 <a href="http://sourceforge.net/projects/opencvlibrary/">http://sourceforge.net/projects/opencvlibrary/</a> 下载最新版的OpenCV源代码，并解压。然后创建编译用的目录release，并启动cmake-gui: </p><div><div><pre>mkdir release
cmake-gui
</pre></div></div><p> 在界面中选择OpenCV源代码的目录，和编译输出目录release，然后按Configure按钮，并根据需要设置各个编译选项，最后点Generate按钮，退出cmake-gui界面。进入编译路径，执行下面的命令： </p><div><div><pre>cd release
make
sudo make install
</pre></div></div><p> 安装完毕之后，启动IPython，并输入 import cv2 测试OpenCV是否能正常载入。 </p></div></div></div></div></div></div>`,2),o=[n];function s(v,a){return p(),i("div",null,o)}const h=t(d,[["render",s],["__file","2015-05-18-516.html.vue"]]);export{h as default};
