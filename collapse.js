animatedcollapse.addDiv('general', 'fade=1')
animatedcollapse.addDiv('library', 'fade=1')
animatedcollapse.addDiv('release', 'fade=1')
animatedcollapse.addDiv('example', 'fade=1')
animatedcollapse.addDiv('about', 'fade=1')
animatedcollapse.addDiv('lpoint2d', 'fade=1')
animatedcollapse.addDiv('lsegment2d', 'fade=1')
animatedcollapse.addDiv('ldirection2d', 'fade=1')
animatedcollapse.addDiv('lvector2d', 'fade=1')
animatedcollapse.addDiv('lline2d', 'fade=1')
animatedcollapse.addDiv('ltriangle2d', 'fade=1')
animatedcollapse.addDiv('lray2d', 'fade=1')
animatedcollapse.addDiv('lcircle2d', 'fade=1')
animatedcollapse.addDiv('lpolygon2d', 'fade=1')
animatedcollapse.addDiv('epoint2d', 'fade=1')
animatedcollapse.addDiv('esegment2d', 'fade=1')
animatedcollapse.addDiv('edirection2d', 'fade=1')
animatedcollapse.addDiv('evector2d', 'fade=1')
animatedcollapse.addDiv('eline2d', 'fade=1')
animatedcollapse.addDiv('etriangle2d', 'fade=1')
animatedcollapse.addDiv('eray2d', 'fade=1')
animatedcollapse.addDiv('ecircle2d', 'fade=1')
animatedcollapse.addDiv('epolygon2d', 'fade=1')
animatedcollapse.addDiv('eintersection', 'fade=1')

/*
animatedcollapse.addDiv('jason', 'fade=1,height=80px')
animatedcollapse.addDiv('kelly', 'fade=1,height=100px')
animatedcollapse.addDiv('michael', 'fade=1,height=120px')

animatedcollapse.addDiv('cat', 'fade=0,speed=400,group=pets')
animatedcollapse.addDiv('dog', 'fade=0,speed=400,group=pets,persist=1,hide=1')
animatedcollapse.addDiv('rabbit', 'fade=0,speed=400,group=pets,hide=1')
*/

animatedcollapse.ontoggle=function($, divobj, state){ //fires each time a DIV is expanded/contracted
	//$: Access to jQuery
	//divobj: DOM reference to DIV being expanded/ collapsed. Use "divobj.id" to get its ID
	//state: "block" or "none", depending on state
}

animatedcollapse.init()
