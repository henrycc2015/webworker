webworker:

1、本质上还是一种消息收发机制 

2、不能操作dom，只能用于计算

3、JS的设计是单线程，后来HTML5又引入webworker，它只能用于计算，因为它不能改DOM，无法造成视觉上的效果。然后它不能共享内存，没有线程同步的概念，所以可以认为JS还是单线程，可以把webworker当成另外的一种回调机制。