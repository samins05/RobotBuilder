power=0;
speed=0;
integrity=0;
solarBoolean=false;
hydroBoolean=false;
nuclearBoolean=false;
scannerBoolean=false;
defenseBoolean=false;
maxPower=0;
maxSpeed=0;
maxStructure=0;
currentPowerType=0;

function changeimg(name)
{
    if (name==1){
    r.src=r1.src;
    }
    else if (name==2){
        r.src=r2.src;
    }
    else if (name==3){
        r.src=r3.src;
    }
    else if (name==4){
        r.src=r4.src;
    }
    else if (name==5){
        r.src=r5.src;
    }
    
}

function initialize(){
    pLevel = document.getElementById("powerLevel");
    spd = document.getElementById("speed");
    int = document.getElementById("integrity");
    scan = document.getElementById("scanner");
    def = document.getElementById("defense");
    pType = document.getElementById("powerType");
    solar = document.getElementById("solarDisplay");
    hydro = document.getElementById("hydroDisplay");
    nuclear = document.getElementById("nuclearDisplay");
    r= document.getElementById("robot");
    r1=document.getElementById("robot1");
    r2=document.getElementById("robot2");
    r3=document.getElementById("robot3");
    r4=document.getElementById("robot4");
    r5=document.getElementById("robot5");
}

function toggleScanner(){
    scannerBoolean=!scannerBoolean;
    if(scannerBoolean){
        scan.innerHTML="ON";
    }
    else{
        scan.innerHTML="OFF";
    }
}

function toggleDefense(){
    defenseBoolean=!defenseBoolean;
    if(defenseBoolean){
        def.innerHTML="ON";
    }
    else{
        def.innerHTML="OFF";
    }
}


function add(name){
    if(currentPowerType===0)
    {
        alert("Please Choose a Power Type.");
    }
    else{
    if(currentPowerType===1){
    maxPower=10;
    maxSpeed=10;
    maxStructure=10;
    }
    else if(currentPowerType===2){
        if (power)
        maxPower=8;
        maxSpeed=12;
        maxStructure=10;
    }
    else if(currentPowerType===3){
        maxPower=12;
        maxSpeed=14;
        maxStructure=4;
    }
    if(name=='pow')
    {
    if (power==maxPower)
    {
        alert("Power Limit is "+maxPower);
   }
   else{
    power++;
    pLevel.innerHTML = "Power Level: " +power;
   }
    }
    else if(name=='spd')
    {
    if (speed==maxSpeed)
    {
        alert("Top Speed Limit is " +maxSpeed);
   }
   else{
    speed++;
    spd.innerHTML = "Top Speed: " +speed;
   }
    }
else if(name=='int')
{
if (integrity==maxStructure)
{
    alert("Structural Integrity Limit is "+maxStructure);
}
else{
integrity++;
int.innerHTML = "Structural Integrity: " +integrity;
}
}
}  
}

function remove(name){
       if(name=='pow'){
        if(power==0){
            alert("You can't have a value lower than 0.");
        }
        else{
        power--;
        pLevel.innerHTML = "Power Level: " +power;
        }
    }
    else if(name=='spd'){
        if(speed==0){
            alert("You can't have a value lower than 0.");
        }
        else{
        speed--;
        spd.innerHTML = "Top Speed: " +speed;
        }
    }
    else if(name=='int'){
        if(integrity==0){
            alert("You can't have a value lower than 0.");
        }
        else{
        integrity--;
        int.innerHTML = "Structural Integrity: " +speed;
        }
    }
}



function toggle(name)
{
    if (name=='s')
    {
    solarBoolean = !solarBoolean;
    if (solarBoolean){
    hydroBoolean=false;
    nuclearBoolean=false;
    solar.innerHTML="ON";
    nuclear.innerHTML="OFF";
    hydro.innerHTML="OFF";
    currentPowerType=1;
    if(power>10){
        power=10;
        pLevel.innerHTML="Power Level: " +power;
    }
    if (speed>10)
    {
        speed=10;
        spd.innerHTML="Top Speed: " +speed;
    }
    if(integrity>10)
    {
        integrity=10;
        int.innerHTML="Structural Integrity: " +integrity;
    }
    pType.innerHTML= "Power Type: Solar";
    }
    else{
        solar.innerHTML="OFF";
        pType.innerHTML = "Power Type: No Power Installed";
    }
    }
    else if (name=='h')
    {
    hydroBoolean = !hydroBoolean;
    if (hydroBoolean){
    solarBoolean=false;
    nuclearBoolean=false;
    currentPowerType=2;
    hydro.innerHTML="ON";
    solar.innerHTML="OFF";
    nuclear.innerHTML="OFF";
    pType.innerHTML= "Power Type: Hydro";
    if(power>8){
        power=8;
        pLevel.innerHTML="Power Level: " +power;
    }
    if (speed>12)
    {
        speed=12;
        spd.innerHTML="Top Speed: " +speed;
    }
    if(integrity>10)
    {
        integrity=10;
        int.innerHTML="Structural Integrity: " +integrity;
    }
    }
    else{
        hydro.innerHTML="OFF";
        pType.innerHTML = "Power Type: No Power Installed";
    }

    }
    if (name=='n')
    {
    nuclearBoolean = !nuclearBoolean;
    if (nuclearBoolean){
    solarBoolean=false;
    hydroBoolean=false;
    currentPowerType=3;
    nuclear.innerHTML="ON";
    solar.innerHTML="OFF";
    hydro.innerHTML="OFF";
    if(power>12){
        power=12;
        pLevel.innerHTML="Power Level: " +power;
    }
    if (speed>14)
    {
        speed=14;
        spd.innerHTML="Top Speed: " +speed;
    }
    if(integrity>4)
    {
        integrity=4;
        int.innerHTML="Structural Integrity: " +integrity;
    }
    pType.innerHTML = "Power Type: Nuclear";
    }
    else{
        nuclear.innerHTML="OFF";
        pType.innerHTML= "Power Type: No Power Installed";
    }

    }
}