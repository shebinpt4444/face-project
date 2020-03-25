function updateposition()
{
var posalpha='a';
var posnum=8;
var whereabouts=[];var i=0;
var direction=prompt("enter the direction","");
var value=prompt("enter howmany blocks","");
switch(direction)
{
    case 's':
        if(posnum==1)
        console.log("cannot go to south")
        else
        {
           
                posnum-=value;
        }
        whereabouts[i]=posalpha+posnum;
        console.log(whereabouts[i]);
        i++;
        break;
        case 'n':
            if(posnum==8)
            console.log("cannot go to north");
            else
            {
               posnum+=value;   
            }
            whereabouts[i]=posalpha+posnum;
            console.log(whereabouts[i]);
            i++;
            break;
            case 'e':
                if(posalpha=='h')
                console.log("cannot go to east");
                else
                {
                    var n=parseInt(value);
                    var ascii=posalpha.charCodeAt(0);
                    ascii+=n;
                    posalpha=String.fromCharCode(ascii);
                }
                whereabouts[i]=posalpha+posnum;
                console.log(whereabouts[i]);
                i++;
                break;
            case 'w':
                    if(posalpha=='a')
                    console.log("cannot go to west");
                    else
                    {
                        var n=parseInt(value);
                        var ascii=posalpha.charCodeAt(0);
                        ascii-=n;
                        posalpha=String.fromCharCode(ascii);
                    }
                    whereabouts[i]=posalpha+posnum;
                    console.log(whereabouts[i]);
                    i++;
                    break;
                case 'ne':
                    if(posalpha=='h'||posnum==8)
                    console.log("cannot go to SE")
                    else
                    {
                        posnum+=value;
                        var n=parseInt(value);
                        var ascii=posalpha.charCodeAt(0);
                        ascii+=n;
                        posalpha=String.fromCharCode(ascii);
                        if(posalpha>'h'||posnum>8)
                        console.log("out of boundary");
                    }
                    whereabouts[i]=posalpha+posnum;
                    console.log(whereabouts[i]);
                    i++;
                    break;
                case 'nw':
                    if(posnum==8||posalpha=='a')
                    console.log("cannot go to NE");
                    else
                    {
                        posnum+=value;
                        var n=parseInt(value);
                        var ascii=posalpha.charCodeAt(0);
                        ascii-=n;
                        posalpha=String.fromCharCode(ascii);
                        if(posalpha<'a'||posnum>8)
                        console.log("out of boundary");
                    }   
                    whereabouts[i]=posalpha+posnum;
                    console.log(whereabouts[i]);
                    i++;
                    break;
                case 'sw':
                    if(posnum==1||posalpha=='a')
                    console.log("cannot go to SW");
                    else
                    {
                        posnum-=value;
                        var n=parseInt(value);
                        var ascii=posalpha.charCodeAt(0);
                        ascii-=n;
                        posalpha=String.fromCharCode(ascii);
                        if(posalpha<'a'||posnum<1)
                        console.log("out of boundary");
                    }   
                    whereabouts[i]=posalpha+posnum;
                    console.log(whereabouts[i]);
                    i++;
                    break;
                 case 'se':
                    if(posnum==1||posalpha=='h')
                    console.log("cannot go to SE");
                    else
                    {
                        posnum-=value;
                        var n=parseInt(value);
                        var ascii=posalpha.charCodeAt(0);
                        ascii+=n;
                        posalpha=String.fromCharCode(ascii);
                        if(posalpha>'h'||posnum<1)
                        console.log("out of boundary");
                    }   
                    whereabouts[i]=posalpha+posnum;
                    console.log(whereabouts[i]);
                    i++;
                    break;   


}
}