.addEventListener('click', function(){

}, false)// this is a default value. It is also called capturing mode);
// some important events :- 
// type, timestamp, default prevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

//-------------------------- EVENT PROPOGATION -------------------------------------------------------
/*  agar div ke andar ek element hai aur div and uske andar wale element dono par event listener laga hai to
    pehle andar wale element ka event propogate hoga fir bahar wale ka. Isko bubble propogation bhi bolte hain.

    Agar isko ulta karna hai to capturing mode ko true karna hoga dono ke event listeners me
*/ 