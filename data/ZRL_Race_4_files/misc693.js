!function(){"use strict";"function"!=typeof String.prototype.escapeHtml&&(String.prototype.escapeHtml=function(){return this.replace(/[<>"\/]/g,function(t){return{"<":"&lt;",">":"&gt;",'"':"&quot;","/":"&#x2F;"}[t]})});function filterAge(){return this.replace(/([(\[]?[0-9]+[)\]]?[ _\-.]?(?:(?:yrs|years?|yo|y|a(?:ñ|&ntilde;)os|an(?:õ|&otilde;)s|ans|anos|an|jahre) ?(?:old)?[)\]]?)|[\[(]? ?(?:U(?:nder)?|S(?:ub)?)[.\- ]*1[0-9] ?[\])]?)/giu,"")}"function"!=typeof String.prototype.filterAge&&(String.prototype.filterAge=filterAge);}();
if(!current_race_id)
var current_race_id='';if(!current_rider_search)
var current_rider_search='';var power_zones=['#D7D7D7','#D1D1D1','#00BB00','#009933','#e6e600','#FF8000','#E63333','#C10A0A'];var power_zones_2=['#D7D7D7','#D1D1D1','rgba(0,170,0,0.5)','rgba(0,153,51,0.5)','rgba(230,230,0,0.5)','rgba(255,128,0,0.5)','rgba(221,0,0,0.5)'];var critical_power_colors=['#f26f33','#e9e9e9','#e9e9e9','#e9e9e9','#e9e9e9','#e9e9e9','#e9e9e9','#e9e9e9','#e9e9e9','#e9e9e9','#e9e9e9','#e9e9e9'];var critical_power_colors_font=['text-white','text-black','text-black','text-black','text-black','text-black','text-black','text-black'];var LABELS_TO_CATS=['','A','B','C','D','E'];function get_LABELS_TO_CATS(data){if(data>100)
return LABELS_TO_CATS[data-100];if(data>10)
return LABELS_TO_CATS[data-10];return LABELS_TO_CATS[data]}
ZP_DATA_addMinMax=function(str,val){switch(val){case 1:str='<b class="text-red">'+str+'</b>';return str;case 2:str='<b class="text-orange">'+str+'</b>';return str;case 3:str='<b>'+str+'</b>';return str;case 4:str="<i class='fa fa-trophy' style='color:#FDD017;font-size: 1rem;' title='Best effort in 90 days prior to this race'></i> "+'<b>'+str+'</b>';return str;default:return str}};ZP_DATA_get_ROUTE=function(data,type,row){if(typeof(ZP_ROUTES[data])!=='undefined'){str=ZP_ROUTES[data].name;if(row.rules&128)
str+=' <i class="fa fa-backward text-maroon" aria-hidden="true"></i>';return str}
return '-'}
ZP_DATA_get_NUMBER=function(data,type,row){if(type!="display")
return data[0];if(!data[0])
return '-';str=data[0];return ZP_DATA_addMinMax(str,data[1])}
ZP_DATA_get_PERCENT=function(data,type,row){if(type!="display")
return data[0];if(!data[0])
return '';if(data[0]<0||data[0]=='0')
return '';if(data[0]>0)
str=data[0]+'%';return ZP_DATA_addMinMax(str,data[1])}
ZP_DATA_get_AGE=function(data,type,row){if(!data) return '';
if (type === "sort") {if (data === "Jnr") {return 19;}
else if (date === "Snr") {return 24;}
else if (date === "Mas") {return 30;}
else if (date === "Vet") {return 40;}
else if (date === "50+") {return 50;}
else if (date === "60+") {return 60;}
else if (date === "70+") {return 70;}
else if (date === "80+") {return 80;}
else {return 90;}}
if(type!="display"||isNaN(data))
return data;if(!data)
return '';if(data<5)
return '';if(ZP_VARS.a)
return data;newRow='';if(data<19)
newRow+="Jnr";else if(data<23)
newRow+="U23";else if(data<30)
newRow+="<span class='text-green'>Snr</span>";else if(data<40)
newRow+="<span class='text-blue'>Mas</span>";else if(data<50)
newRow+="<span class='text-orange'>Vet</span>";else if(data<60)
newRow+="<span class='text-red'>50+</span>";else if(data<70)
newRow+="<span class='text-red'>60+</span>";else if(data<80)
newRow+="<span class='text-red'>70+</span>";else if(data<90)
newRow+="<span class='text-red'>80+</span>";else newRow+="<span class='text-red'>90+</span>";return newRow}
ZP_DATA_get_WKG=function(data,type,row){if(type!="display")
return data[0];if(!data[0]||data[0]<1.0)
return '';str=data[0]+'<rsmall>w/kg</rsmall>';return ZP_DATA_addMinMax(str,data[1])}
ZP_DATA_get_WKG_ESTIMATED=function(data,type,row){if(type!="display")
return data[0];if(!data[0]||data[0]<1.0)
return '';str='<span class="text-blue">'+data[0]+'<rsmall class="text-blue">w/kg</rsmall></span>';return str}
ZP_DATA_get_WKG_CATEGORY=function(data,type,row){if(type!="display")
return data[0];from='<i class="fa fa-fw" aria-hidden="true"></i>';if(typeof(row.src)==='undefined')
from='<i class="fa fa-fw" aria-hidden="true"></i>';else if(row.src==1)
from='<i title="Source: Fit file" class="fa fa-bolt fa-fw text-blue"></i>';else if(row.src>=10)
from='<i title="Source: Live data" class="fa fa-bolt fa-fw text-green"></i>';if(row.wkg1200[0])
str=ZP_DATA_get_WKG(row.wkg_ftp,type,row);else str=ZP_DATA_get_WKG_ESTIMATED(row.wkg_ftp,type,row);str+=from;return str}
ZP_DATA_get_AVG_WKG=function(data,type,row){if(type!="display")
return data[0];from='<i class="fa fa-fw" aria-hidden="true"></i>';if(typeof(row.src)==='undefined')
from='<i class="fa fa-fw" aria-hidden="true"></i>';else if(row.src==1)
from='<i title="Source: Fit file" class="fa fa-bolt fa-fw text-blue"></i>';else if(row.src>=10)
from='<i title="Source: Live data" class="fa fa-bolt fa-fw text-green"></i>';if(row.wkg1200[0])
str=ZP_DATA_get_WKG(data,type,row);else str=ZP_DATA_get_WKG_ESTIMATED(data,type,row);str+=from;return str}
ZP_DATA_get_WKG_OR_WATTS=function(data,type,row){if(type!="display")
return data[0];if(!data[0]||data[0]<1.0)
return '';if(data[0]<50)
str=data[0]+'<rsmall>w/kg</rsmall>';else str=data[0]+'<rsmall>w</rsmall>';return ZP_DATA_addMinMax(str,data[1])}
ZP_DATA_get_WEIGHT=function(data,type,row){if(type!="display")
return data[0];if(!data[0])
return '';if(data[0]<0||data[0]=='0.0')
return '';if(typeof(row.is_guess)!=='undefined'&&row.is_guess>0)
str='<span class="text-blue">'+data[0]+'<rsmall class="text-blue">kg</rsmall></span>';else str=data[0]+'<rsmall>kg</rsmall>';return ZP_DATA_addMinMax(str,data[1])}
ZP_DATA_get_HR_MAX=function(data,type,row){if(type!="display")
return data[0];if(!data[0]||data[0]<50){if(row.hrm>0){return "<i class='fa fa-heartbeat fa-fw text-gray'></i>"}
return ''}
str=data[0]+'<rsmall>bpm</rsmall>';str=ZP_DATA_addMinMax(str,data[1]);return str}
ZP_DATA_get_HR_RANGE=function(data,type,row){if(type!="display")
return data[0];if(!data[0])
return '';min=0;max=row.max_hr-row.min_hr;if(!max)
return '';now=data[0]-row.min_hr;avg=row.avg_hr-row.min_hr;d=Math.round(now/max*100);if(d<=0)
return '';d2=100-d;if(d>95)
color=7;else if(d>90)
color=6;else if(d>85)
color=5;else if(d>80)
color=4;else if(d>70)
color=3;else if(d>50)
color=2;else color=1;str='<div class="progress" style="margin:0;width:100px" title="Min: '+row.min_hr+'bpm | Max: '+row.max_hr+'bpm | Avg: '+row.avg_hr+'bpm | Now: '+row.ahr[0]+'bpm">';str+='<div class="progress-bar progress-bar-success" style="width: '+d+'%;background-color: '+power_zones[color]+';">';if(d>50)
str+='<span class="text-black pull-left" style="padding-left:5px">'+row.ahr[0]+'<small>bpm</small></span>';str+='</div>';str+='<div class="progress-bar progress-bar-success" style="width: '+d2+'%;background-color: #EEEEEE;">';str+='</div>';str+='</div>';return str}
ZP_DATA_get_HR=function(data,type,row){if(type!="display")
return data[0];if(!data[0]||data[0]<50){if(row.hrm>0){return "<i class='fa fa-heartbeat fa-fw text-gray'></i>"}
return ''}
str=data[0]+'<rsmall>bpm</rsmall>';str=ZP_DATA_addMinMax(str,data[1]);return str}
ZP_DATA_get_HEIGHT=function(data,type,row){if(type!="display")
return data[0];if(!data[0])
return '';str='';if(typeof(row.log)!=='undefined'&&row.log>0)
str+=ZP_EXPAND_RESULT_DATA(row);if(typeof(row.is_guess)!=='undefined'&&row.is_guess>0)
str+='<span class="text-blue">'+data[0]+'<rsmall class="text-blue">cm</rsmall></span>';else str+=data[0]+'<rsmall>cm</rsmall>';return ZP_DATA_addMinMax(str,data[1])}
function ZP_EXPAND_RESULT_DATA(row){str='<i class="fa fa-info-circle fa-2 text-green" aria-hidden="true"></i> '
return str}
ZP_DATA_get_WATTS=function(data,type,row){if(type!="display")
return data[0];if(!data[0]||data[0]<10)
return '';str=data[0]+'<rsmall>w</rsmall>';return ZP_DATA_addMinMax(str,data[1])}
ZP_DATA_get_CADENCE=function(data,type,row){if(type!="display")
return data[0];if(!data[0]||data[0]<10)
return '';str=data[0]+'<rsmall>rpm</rsmall>';return ZP_DATA_addMinMax(str,data[1])}
ZP_DATA_get_GRADE=function(data,type,row){if(type!="display")
return data[0];if(!data[0])
return '';str=data[0]+'<rsmall>%</rsmall>';return ZP_DATA_addMinMax(str,data[1])}
ZP_DATA_get_POWER_TYPE=function(data,type,row){if(type!="display")
return data;if(!data)
return '';if(typeof(row.is_guess)!=='undefined'&&row.is_guess>0)
return '';switch(data){case 1:data='<span class="label label-default small" > ZP </span>';break;case 2:data='<span class="label label-primary small"> Smart </span>';break;case 3:data='<span class="label label-success small"> Power </span>';break;default:data='-'}
return data}
ZP_DATA_get_HRR=function(data,type,row){if(type!="display"){return data[0]*100}
if(!data[0])
return '';if(data[0]=='0.00')
return '';str=data[0];str2=row.hreff[0];return ZP_DATA_addMinMax(str,data[1])}
ZP_DATA_get_LAG=function(data,type,row,object){if(type!="display")
return data;if(!data)
return '';d=data;if(d>120)
d=120;d=Math.round(d/120*100);d2=100-d;if(d>=99)
color=6;else if(d>=80)
color=5;else if(d>=60)
color=4;else if(d>=40)
color=3;else if(d>=20)
color=2;else color=1;str='<div class="progress" style="margin:0;width:100px" title="No data received for '+vir+'seconds">';str+='<div class="progress-bar progress-bar-success" style="width: '+d+'%;background-color: '+power_zones[color]+';">';str+='</div>';str+='<div class="progress-bar progress-bar-success" style="width: '+d2+'%;background-color: '+power_zones[0]+';">';str+='<span class="text-black pull-right" style="padding-right:5px">'+data+'<small>s</small></span>';str+='</div>';str+='</div>';return str}
ZP_DATA_get_progress_bar=function(perc,msg,cat_color,title){if(perc>0&&perc<45)
perc=45;d2=100-perc;str='<div class="progress pull-left" style="margin:0;width:55px;margin-right:5px" title="'+title+'">';str+='<div class="progress-bar progress-bar-success" style="width: '+perc+'%;background-color: '+cat_color+';">';str+='<span class="text-white pull-left" style="padding-left:2px">'+msg+'</span>';str+='</div>';str+='<div class="progress-bar progress-bar-success" style="width: '+d2+'%;background-color: '+power_zones[0]+';">';str+='</div>';str+='</div>';return str}
ZP_DATA_get_NP=function(data,type,row){if(typeof(data)=='undefined')
return '';val=((data[0]/row.avg_power[0])-1)*100;vi=val;vir=Math.round(val);if(type!="display")
return vi;if(!data[0])
return '';if(!row.avg_power[0])
return '';d=vir*2;d2=100-d;color=0;if(vi>=12)
color=6;else if(vi>=10)
color=5;else if(vi>=8)
color=4;else if(vi>=6)
color=3;else if(vi>=4)
color=2;else color=1;str='';{str='<div class="progress" style="margin:0;width:50px" title="Variability Index of '+vir+'%">';str+='<div class="progress-bar progress-bar-success" style="width: '+d+'%;background-color: '+power_zones[color]+';">';str+='</div>';str+='<div class="progress-bar progress-bar-success" style="width: '+d2+'%;background-color: '+power_zones[0]+';">';str+='<span class="text-black pull-right" style="padding-right:5px">'+data[0]+'<small>w</small></span>';str+='</div>';str+='</div>'}
return str}
ZP_DATA_get_AVG_PR=function(data,type,row){if(type!="display")
return data;if(!data)
return '';str='<div class="progress" style="margin:0;width:200px">';cnt=data.length;if(!cnt)
return '';width=100/cnt;for(i=cnt-1;i>=0;i--){d=data[i]/row.weight[0];diff=((d/row.wkg[0]))*100;diff=Math.round(diff);if(diff>=150)
c=power_zones[6];else if(diff>=120)
c=power_zones[5];else c='#D1D1D1';str+='<div class="progress-bar progress-bar-success" title="'+d.toFixed(2)+'wkg" style="width: '+width+'%;background-color: '+c+';">';str+='</div>'}
str+='</div>';return str}
ZP_DATA_get_REST=function(avg,avg_now,weight){if(!avg)
return '';if(!avg_now)
return '';diff=(1-(avg_now/avg))*100;diff=Math.round(diff);p=diff;if(diff<0)
return '';if(diff>50)
diff=50;if(diff>=50)
i='#BBBBBB';else if(diff>30)
i='#B7B7B7';else if(diff>20)
i='#CCCCCC';else if(diff>10)
i='#C7C7C7';else i='#D1D1D1';avg_wkg=0;if(weight>0)
avg_wkg=avg_now/weight;diff=50-diff;diff2=100-diff;str='<div class="progress" style="margin:0;width:100px" title="Power '+p+'% below average">';str+='<div class="progress-bar progress-bar-success" style="width: '+diff+'%;background-color: '+i+';">';str+='</div>';str+='<div class="progress-bar progress-bar-success" style="width: '+diff2+'%;background-color: #EEEEEE;">';str+='</div>';str+='</div>';return str}
ZP_DATA_get_WORK=function(avg,avg_now,weight){if(!avg)
return '';if(!avg_now)
return '';diff=((avg_now/avg)-1)*100;diff=Math.round(diff);p=diff;if(diff<0)
return '';if(diff>50)
diff=50;if(diff>=50)
i=7;else if(diff>=40)
i=6;else if(diff>25)
i=5;else if(diff>15)
i=4;else if(diff>5)
i=2;else i=1;diff2=(50-diff);diff+=50;avg_wkg=0;if(weight>0)
avg_wkg=avg_now/weight;str='<div class="progress" style="margin:0;width:100px" title="Power '+p+'% above average">';str+='<div class="progress-bar progress-bar-success" style="width: '+diff+'%;background-color: '+power_zones[i]+';">';if(avg_wkg>0)
str+='<span class="text-black pull-left" style="padding-left:5px"><small>'+avg_wkg.toFixed(1)+'<rsmall>wkg</rsmall></small></span>';else str+='<span class="text-black pull-left" style="padding-left:5px"><small>'+avg_now+'<rsmall>w</rsmall></small></span>';str+='</div>';str+='<div class="progress-bar progress-bar-success" style="width: '+diff2+'%;background-color: #EEEEEE;">';str+='</div>';str+='</div>';return str}
ZP_DATA_get_FR=function(data,type,row){if(!row.frn2[0])
return '-';if(row.frn2[0]==0)
return '';fr=Math.round((1-(row.fr1[0]/row.fr2[0]))*100);frn=Math.round((1-(row.frn1[0]/row.frn2[0]))*100);if(type!="display")
return frn;str='<div class="progress" style="margin:0" title="'+row.frn1[0]+'np('+row.fr1[0]+'av)   vs   '+row.frn2[0]+'np('+row.fr2[0]+'av)">';if(frn<-20)
i=6;else if(frn<-10)
i=5;else if(frn<0)
i=4;else if(frn>10)
i=2;else i=3;d=Math.abs(frn)*3;if(d>40)
d=40;d2=100-d;if(frn<0){str+='<div class="progress-bar progress-bar-success" style="width: '+d+'%;background-color: '+power_zones[i]+';">';str+='</div>';str+='<div class="progress-bar progress-bar-success" style="width: '+d2+'%;background-color: '+power_zones[0]+';">';str+='<span class="text-black"><small>'+frn+'%</small></span>';str+='</div>'}
else{str+='<div class="progress-bar progress-bar-success" style="width: '+d2+'%;background-color: '+power_zones[0]+';">';str+='<span class="text-black"><small>+'+frn+'%</small></span>';str+='</div>';str+='<div class="progress-bar progress-bar-success" style="width: '+d+'%;background-color: '+power_zones[i]+';">';str+='</div>'}
str+='</div>';return str}
ZP_DATA_get_ZONES=function(data,type,row){if(type!="display")
return data[6]*3+data[5]*2+data[4];str='<div class="progress" style="margin:0">';empty=!0;for(i=0;i<data.length;i++){if(!data[i])
continue;str+='<div class="progress-bar progress-bar-success" style="width: '+data[i]+'%;background-color: '+power_zones[i]+';">';str+='<span class="sr-only">'+data[i]+'</span>';str+='</div>';empty=!1}
if(empty)
return '-';str+='</div>';return str}
ZP_DATA_get_RACE_TIME=function(data,type,row){if(type!="display")
return data[0];if(!data[0])
return '-';str='';full_time=convertSecondsToTime(data[0]);if(row.time_diff==data[0])
time_diff='';else if(row.time_diff<60)
time_diff='<b><rsmall>'+'+'+convertSecondsToTime(row.time_diff)+'</rsmall><rsmall>s</rsmall></b>';else time_diff='<rsmall>+'+convertSecondsToTime(row.time_diff)+'</rsmall>';width=time_diff?'100':'1';str="<div style='width:"+width+"px'><div class='pull-left'>"+full_time+'</div><div class="pull-right">'+time_diff+'</div></div>';return str}
ZP_DATA_get_FLAG=function(data,type,row,use_flag){if(type!="display")
return data;if(data==null)
return '-';flag="<span class='flag-icon flag-icon-"+row.flag+"'></span> ";return flag}
ZP_DATA_get_TEAMNAME=function(row){str='';if(row.tname&&row.tname>''){var team_name=row.tname.escapeHtml();bc=(row.tbc)?row.tbc:'0073b7';bd=(row.tbd)?row.tbd:'ffffff';if(bd=='ffffff')
bd=bc;c=(row.tc)?row.tc:'ffffff';str+=' <small><span style="margin-left:5px;background-color:#'+bc+';border-color:#'+bd+' !important;color:#'+c+'" class="label label-custom"><a style="color:#'+c+'" href="team.php?id='+row.tid+'">'+team_name+'</a></span></small>'}
return str};ZP_DATA_get_TEAMNAME_LARGE=function(row){str='';if(row.tname&&row.tname>''){bc=(row.tbc)?row.tbc:'0073b7';bd=(row.tbd)?row.tbd:'ffffff';if(bd=='ffffff')
bd=bc;c=(row.tc)?row.tc:'ffffff';str+=' <span style="margin-left:5px;background-color:#'+bc+';border-color:#'+bd+' !important;color:#'+c+'" class="label label-custom"><a style="color:#'+c+'" href="team.php?id='+row.tid+'">'+row.tname+'</a></span>'}
return str};ZP_DATA_get_NAME_WITH_TEAM_ARRAY=function(data,type,row,use_flag){data=data.filterAge();data=data.escapeHtml();use_flag=(typeof(use_flag)=='undefined')?!0:use_flag;show_reg=(typeof(row.reg)=='undefined')?0:(row.reg>0?1:0);if(type!="display")
return data;if(data==null)
return '-';var link="profile.php?z="+row.zwid;str='<div style="width:100%;position:relative">';flag="<span class='flag-icon flag-icon-"+row.flag+"'></span> ";title='View Profile';if(use_flag)
str+=flag;if(row.fl&1)
str+='<i class="fa fa-globe text-blue" title="Zwift National Champion 2019"></i> ';if(typeof(row.lead)!=='undefined'&&row.lead)
str+='LEADER: ';if(typeof(row.sweep)!=='undefined'&&row.sweep)
str+='SWEEPER: ';if(row.zwid>0){if(typeof(row.reg)!=='undefined'&&row.reg<=0)
str+="<a class='small' href='"+link+"' title='"+data+"'>"+data.substring(0,40)+"</a>";else str+="<a href='"+link+"' title='"+data+"'>"+data.substring(0,40)+"</a>"}
else str+=data.substring(0,40);if(typeof(row.friend)!=='undefined'&&row.friend==1)
str+=' <rsmall><i class="fa fa-user  text-orange" aria-hidden="true"></i></rsmall>';if(typeof(ZP_VARS.TEAMS)!=='undefined')
if(row.tid>0&&typeof(ZP_VARS.TEAMS[row.tid])!=='undefined'){bc=(ZP_VARS.TEAMS[row.tid].tbc)?ZP_VARS.TEAMS[row.tid].tbc:'0073b7';bd=(ZP_VARS.TEAMS[row.tid].tbd)?ZP_VARS.TEAMS[row.tid].tbd:'ffffff';if(bd=='ffffff')
bd=bc;c=(ZP_VARS.TEAMS[row.tid].tc)?ZP_VARS.TEAMS[row.tid].tc:'ffffff';tno='';if(typeof(ZP_VARS.TEAMS[row.tid].tno)!=='undefined'){tno=' <span class="label label-cat-E label-as-badge" style="font-size:8px">'+ZP_VARS.TEAMS[row.tid].tno+'</span> '}
str+='<small style="position:absolute;right:0"><span style="margin-left:5px;background-color:#'+bc+';border-color:#'+bd+' !important;color:#'+c+'" class="label label-custom"><a style="color:#'+c+'" href="team.php?id='+row.tid+'">'+ZP_VARS.TEAMS[row.tid].tname+'</a></span>'+tno+'</small>'}
else if(row.topen>0){str+='<small style="position:absolute;right:0"><i title="Searching for Team" class="fa fa-search text-green" aria-hidden="true"></i></small>'}
if(typeof(row.male)!=='undefined'&&row.male==0){str+=' <span class="label label-cat-F label-as-badge" style="font-size:10px"><i class="fa fa-venus text-white" aria-hidden="true"></i></span> '}
str+='</div>';return str}
ZP_DATA_get_NAME=function(data,type,row,obj){data=data.filterAge();data=data.escapeHtml();show_reg=(typeof(row.reg)=='undefined')?0:(row.reg>0?1:0);if(type!="display")
return data;if(data==null)
return '-';zwid=row.zwid;data+='';var link="profile.php?z="+zwid;str='<div style="width:100%;position:relative">';flag="<span class='flag-icon flag-icon-"+row.flag+"'></span> ";title='View Profile';str+=flag;if(row.fl&1)
str+='<i class="fa fa-globe text-blue" title="Zwift National Champion 2019"></i> ';if(typeof(row.lead)!=='undefined'&&row.lead)
str+='LEADER: ';if(typeof(row.sweep)!=='undefined'&&row.sweep)
str+='SWEEPER: ';if(zwid>0){if(typeof(row.reg)!=='undefined'&&row.reg<=0)
str+="<a class='small' href='"+link+"' title='"+data+"'>"+data.substring(0,40)+"</a>";else str+="<a href='"+link+"' title='"+data+"'>"+data.substring(0,40)+"</a>"}
else str+=data.substring(0,40);if(typeof(row.friend)!=='undefined'&&row.friend==1)
str+=' <rsmall><i class="fa fa-user  text-orange" aria-hidden="true"></i></rsmall>';if(row.pt==1)
str+=' <i class="fa  fa-shield text-green" title="Zwift Verified Rider"></i>';else if(row.pt==2)
str+=' <i class="fa  fa-shield text-blue" title="Pro Rider"></i>';else if(row.pt==3)
str+=' <i class="fa  fa-id-badge text-red" title="Zwift Staff Member"></i>';if(row.tname&&row.tname>''){bc=(row.tbc)?row.tbc:'0073b7';bd=(row.tbd)?row.tbd:'ffffff';if(bd=='ffffff')
bd=bc;c=(row.tc)?row.tc:'ffffff';tno='';if(typeof(row.tno)!=='undefined'){tno=' <span class="label label-cat-E label-as-badge" style="font-size:8px">'+row.tno+'</span> '}
str+='<small style="position:absolute;right:0"><span style="margin-left:5px;background-color:#'+bc+';border-color:#'+bd+' !important;color:#'+c+'" class="label label-custom"><a style="color:#'+c+'" href="team.php?id='+row.tid+'">'+row.tname+'</a></span>'+tno+'</small>'}
else if(row.topen>0){str+='<small style="position:absolute;right:0"><i title="Searching for Team" class="fa fa-search text-green" aria-hidden="true"></i></small>'}
if(typeof(row.male)!=='undefined'&&row.male==0){str+=' <span class="label label-cat-F label-as-badge" style="font-size:10px"><i class="fa fa-venus text-white" aria-hidden="true"></i></span> '}
str+='</div>';return str}
ZP_DATA_get_NAME_SHORT=function(data,type,row,use_flag){data=data.escapeHtml();use_flag=(typeof(use_flag)=='undefined')?!0:use_flag;if(type!="display")
return data;if(data==null)
return '-';str='';flag="<span class='flag-icon flag-icon-"+row.flag+"'></span> ";title='View Profile';if(use_flag)
str+=flag;if(row.zwid>0){str+="<a class='small' href='profile.php?z="+row.zwid+"' title='"+data+"'><span class='text-darkgray'>"+data.substring(0,40)+"</span></a>"}
else str+=data.substring(0,40);return str}
ZP_DATA_get_POSITION=function(data,type,row){if(!row.display_pos)
return '';if(type!="display")
return parseInt(data);pos=row.position_in_cat;if(pos==1)
return "<i class='fa fa-trophy' style='color:#FDD017'></i>";else if(pos==2)
return "<i class='fa fa-trophy' style='color:#C0C0C0'></i>";else if(pos==3)
return "<i class='fa fa-trophy' style='color:#CD7F32'></i>";return pos}
ZP_DATA_get_POSITION_SIMPLE=function(data,type,row){if(type!="display")
return parseInt(data);pos=data;if(pos==1)
return "<i class='fa fa-trophy fa-fw' style='color:#FDD017'></i>";else if(pos==2)
return "<i class='fa fa-trophy fa-fw' style='color:#C0C0C0'></i>";else if(pos==3)
return "<i class='fa fa-trophy fa-fw' style='color:#CD7F32'></i>";return pos}
function ZP_get_division_name(div){if(div==0)
return '';if(div==1||div==10)
return 'A';if(div==5)
return 'A+';if(div==2||div==20)
return 'B';if(div==3||div==30)
return 'C';if(div==4||div==40)
return 'D'}
function ZP_get_category_color(category){switch(category){case 'A+':case 0:case 5:case '5':case '0':newRow='label-cat-Aplus';break;break;case 1:case 10:case 11:case 101:case '1':case 'A':case 'A2':newRow='label-cat-A';break;case 2:case 21:case 201:case 20:case '2':case 'B':case 'B2':newRow='label-cat-B';break;case 3:case 31:case 301:case 30:case '3':case 'C':case 'C2':newRow='label-cat-C';break;case 4:case 41:case 401:case 40:case '4':case 'D':case 'D2':newRow='label-cat-D';break;case 5:case 51:case 501:case '5':case 'E':case 'E2':newRow='label-cat-E';break;case 'F':case 'G':case 'H':case 'I':case 'J':case 'M':newRow='label-cat-'+category;break;default:newRow="label-default";break}
return newRow}
ZP_DATA_get_SPRINT=function(data,type,row){if(typeof(row.watts[data])=='undefined')
return '';msec=row.msec[data];if(type!='display')
return msec;watts=row.watts[data];wkg=row.wkg[data];full_time=convertSecondsToTime(msec);str="<div style='width:170px'>";str+="<div class='pull-left'><small><i class='fa fa-clock-o fa-fw text-orange' aria-hidden='true'></i> "+full_time+'</small></div>';str+='<div class="pull-right">';if(wkg!='0'&&wkg!=0)
str+='<small><i class="fa fa-bolt fa-fw text-green"></i> '+watts+'</small><rsmall>w</rsmall>';str+=' <small><i class="fa fa-at fa-fw text-blue"></i> '+wkg+'</small><rsmall>wkg</rsmall>';str+='</div>';str+='</div>';return str}
ZP_DATA_get_SKILL_SPRINT=function(data,type,row,i){msec=row.sprints[i].elapsed;if(type!='display')
return msec;watts=row.sprints[i].watts;wkg=row.sprints[i].wkg;points=row.sprints[i].points;full_time=convertSecondsToTime(msec);h=row.sprints[i].h;str="<div style='width:220px'>";str+="<div class='pull-left'>";str+="<small><i class='fa fa-clock-o fa-fw text-orange' aria-hidden='true'></i> "+full_time+'</small>';if(wkg!='0'&&wkg!=0)
str+='<small><i class="fa fa-bolt fa-fw text-green"></i> '+watts+'</small><rsmall>w</rsmall>';str+=' <small><i class="fa fa-at fa-fw text-blue"></i> '+wkg+'</small><rsmall>wkg</rsmall>';str+='</div>';str+='<div class="pull-right">';if(h)
str+=' <u><b><small class="text-orange">'+points+'</small><rsmall>pts</rsmall></b></u>';else str+=' <small class="text-black">'+points+'</small><rsmall>pts</rsmall>';str+='</div>';return str}
ZP_DATA_get_ZWIFT_CATEGORY=function(data,type,row,size){if(type!='display')
return data;cat_name=get_LABELS_TO_CATS(data);if(typeof(size)=='undefined')
size='14';if(row.dq==1){if(row.dq_cat)
cat_name=row.dq_cat;else cat_name='DQ'}
str='<span class="label '+ZP_get_category_color(data)+' label-as-badge" style="font-size:'+size+'px;">'+cat_name+'</span> ';return str}
ZP_DATA_get_NEW_CATEGORY=function(data,type,row){if(type!='display')
return data;if(typeof(row.upg)!=='undefined'&&row.upg>0)
str='<span class="glyphicon glyphicon-arrow-right" style="color:#dddddd;margin-right:5px" aria-hidden="true"></span>';else str='<span style="color:#ffffff;padding-left:20px" aria-hidden="true"></span>';cat=data;if(row.div==5&&cat=='A'){str+='<span class="label '+ZP_get_category_color('A+')+' label-as-badge" style="font-size:14px;">'+cat+'</span> '}
else{str+='<span class="label '+ZP_get_category_color(data)+' label-as-badge" style="font-size:14px;">'+cat+'</span> '}
return str}
function ZP_DATA_get_95_PERCENT(row){if(!row.w1200[0]||row.w1200[0]=='0'){val=row.wkg_ftp[0]}
else{watts=row.w1200[0];weight=row.weight[0];wkg=watts/weight;wkg*=0.95;val=wkg.toFixed(3)}
str=val+'<rsmall>w/kg</rsmall>';return str}
ZP_DATA_get_DATE_SHORT=function(data,type,row,obj){if(type!="display")
return data;if(!data)
return '-';str=timeStamp(data,ZP_VARS.timezone_offset,{compactTime:!0,compactDate:!0,ignoreTime:!0})
return str}
ZP_DATA_get_DATE=function(data,type,row,obj){if(type!="display")
return data;if(!data)
return '-';str=getShortDate(data,ZP_VARS.timezone_offset);return str}
ZP_DATA_get_TIME_START=function(data,type,row,obj){if(type!="display")
return data;if(!data)
return '-';str=timeStamp(data,ZP_VARS.timezone_offset,{compactTime:!0,compactDate:!0,ignoreDate:!0})
return str}
ZP_DATA_get_TIME_FROM_DATE=function(data,type,row,obj){if(type!="display")
return data;if(!data)
return '-';str=timeStamp(data,ZP_VARS.timezone_offset,{compactTime:!0,compactDate:!0,ignoreDate:!0})
return str}
ZP_DATA_get_ZWIFT_EVENT_TITLE=function(data,type,row,obj){if(type!="display")
return data;if(!data)
return '-';title=data;if(row.lbl)
str='<a class="no_under hover_green" href="events.php?zid='+row.zid+'&r='+row.lbl+'">'+title+"</a>";else str='<a class="no_under hover_green" href="events.php?zid='+row.zid+'">'+title+"</a>";if(row.zcl){str+='<BR><a href="https://www.facebook.com/ZwiftCommunityLive/"><img src="i/zcl.jpg" style="height:100px" alt="Zwift Community Live"></a>'}
if(row.spl>''){str+='<BR><BR><a target="_blank" href="'+row.spl+'"><img height="100px" src="'+row.spi+'"></a>'}
return str}
ZP_DATA_get_ACTIVITY_TITLE=function(data,type,row,obj){if(type!="display")
return data;if(!data)
return '-';str=data;if(row.zeid)
str='<a class="no_under hover_green" href="events.php?zid='+row.zeid+'">'+data+"</a>";return str}
ZP_DATA_get_RACE_ID=function(data,type,row,obj){if(type!="display")
return data;if(!data)
return '';title=data;if(row.rid&&typeof(ZP_SERIES[row.rid])!=='undefined'){str='<span style="margin-left:5px;background-color:'+ZP_SERIES[data].bc+' !important;border-color:'+ZP_SERIES[data].bd+' !important ;color:#'+ZP_SERIES[data].c+' !important" class="label label-custom"><a style="color:#'+ZP_SERIES[data].c+';" href="series.php?id='+data+'">'+data+'</a></span>'}
else str='<span style="margin-left:5px;background-color:blue;border-color:blue;color:white" class="label label-custom"><a style="color:white;" href="series.php?id='+data+'">'+data+'</a></span>';return str}
ZP_DATA_get_LEAGUE_ID=function(data,type,row,obj){if(type!="display")
return data;if(!data)
return '';bc=(row.lidbc)?row.lidbc:'blue';bd=(row.lidbd)?row.lidbd:'white';c=(row.lidc)?row.lidc:'white';if(bd=='ffffff')
bd=bc;str='<span style="margin-left:5px;background-color:#'+bc+';border-color:#'+bd+';color:#'+c+'" class="label label-custom"><a style="color:#'+c+';" href="league.php?id='+data+'">'+row.league_name+'</a></span>';return str}
ZP_DATA_get_DISTANCE=function(data,type,row,obj){if(type!="display")
return data;if(!data)
return '';if(data<=0)
return '';if(data>200)
str=numberWithCommas(Math.round((data/1000)))+"<rsmall> km</rsmall>";else if(data>100)
str=numberWithCommas((data/1000).toFixed(1))+"<rsmall> km</rsmall>";else if(data>10)
str=numberWithCommas((data/1000).toFixed(2))+"<rsmall> km</rsmall>";else str=numberWithCommas((data/1000).toFixed(3))+"<rsmall> km</rsmall>";return str}
ZP_DATA_get_SPEED=function(data,type,row,obj){if(type!="display")
return data;if(!data)
return '';if(data<=0)
return '';str=(data/1000).toFixed(1)+"<rsmall> kmh</rsmall>";return str}
ZP_DATA_get_CALORIES=function(data,type,row,obj){if(type!="display")
return data;if(!data)
return '';if(data<=0)
return '';str=numberWithCommas(data)+"<rsmall> cal</rsmall>";return str}
ZP_DATA_get_DISTANCE_MINMAX=function(data,type,row,obj){if(type!="display")
return data[0];if(!data[0])
return '';if(data[0]<=0)
return '';str=(data[0]/1000).toFixed(1)+"<rsmall> km</rsmall>";return ZP_DATA_addMinMax(str,data[1])}
ZP_DATA_get_ELEVATION=function(data,type,row,obj){if(type!="display")
return data;if(!data)
return '';if(data<=0)
return '';str=numberWithCommas(data)+"<rsmall>m</rsmall>";return str}
ZP_DATA_get_DISTANCE_SORT=function(data,type,row,obj){if(type!="display")
return data[0];if(!data[0])
return '-';str=(data[0]/1000).toFixed(1)+"<rsmall>km</rsmall>";return ZP_DATA_addMinMax(str,data[1])}
ZP_DATA_get_COURSE=function(data,type,row,obj){if(type!="display")
return data;if(!data)
return '-';if(data=='W')
str='<i class="fa fa-area-chart text-olive"></i>';else if(data=='R')
str='<i class="fa fa-road text-maroon"></i>';else if(data=='L')
str='<i class="fa fa-umbrella text-blue"></i>';else if(data=='I')
str='<i class="fa fa-tree text-green"></i>';else if(data=='N')
str='<i class="fa fa-taxi text-yellow"></i>';else str='-';return str}
function ZP_DATA_get_MINI_ROUTE(data,type,row,obj,border_style){if(!data)
return '';str='<span>';switch(border_style){case 1:str='<span style="border-bottom:1px solid darkgray;">';break;case 0:str='<span style="border-bottom:1px solid black;">';break}
for(i=0;i<data.length;i++){switch(data[i]){case '0':str+='<i class="fa fa-fw" aria-hidden="true"></i>';break;break;case '1':str+='<i class="fa fa-fw fa-play fa-rotate-270 text-green" aria-hidden="true" title="Short moderate climb" style="font-size:0.5rem"></i>';break;case '2':str+='<i class="fa fa-fw fa-play fa-rotate-270 text-red" aria-hidden="true" title="Short steep climb" style="font-size:0.5rem"></i>';break;case '3':str+='<i class="fa fa-fw fa-play fa-rotate-270 text-green" aria-hidden="true" title="Medium moderate climb" style="font-size:1.0rem"></i>';break;case '4':str+='<i class="fa fa-fw fa-play fa-rotate-270 text-red" aria-hidden="true" title="Medium steep climb" style="font-size:1.0rem"></i>';break;case '5':str+='<i class="fa fa-fw fa-play fa-rotate-270 text-green" aria-hidden="true" title="Long moderate climb" style="font-size:1.5rem"></i>';break;case '6':str+='<i class="fa fa-fw fa-play fa-rotate-270 text-red" aria-hidden="true" title="Long steep climb" style="font-size:1.5rem"></i>';break;break}}
str+='</span>';return str}
ZP_DATA_get_DIFFICULTY=function(data,type,row,obj){if(type!="display")
return parseInt(data);if(!data)
return '-';if(data<=0)
str='-';else if(data>70)
str='<span class="text-maroon">Tough</span>';else if(data>50)
str='<span class="text-orange">Hard</span>';else if(data>30)
str='<span class="text-purple">Medium</span>';else if(data>10)
str='<span class="text-olive">Easy</span>';else str='<span class="text-darkgray">Flat</span>';return str}
ZP_DATA_get_CATEGORIES=function(data,type,row,obj){if(type!="display")
return data;if(!data)
return '-';cats=data.split(',');if(typeof(row.signups)!=='undefined')
signups=row.signups.split(',');else signups=[];str='';len=cats.length;if(len>10)
len=10;for(i=0;i<len;i++){if(typeof(signups[i])!=='undefined'&&signups[i]>0)
s=signups[i];else s='&nbsp;&nbsp;';if(cats[i].length)
str+='<span class="label '+ZP_get_category_color(cats[i])+' label-as-badge" style="font-size:10px;">'+s+'</span> ';else str+='<span class="label label-as-badge label-default" style="font-size:10px;">'+cats[i]+'</span> '}
return str}
ZP_DATA_get_RESULTS=function(data,type,row,obj){if(type!="display")
return data;if(!data)
return '';str=data;return str}
ZP_DATA_get_ZWID=function(data,type,row,obj){if(type!="display")
return parseInt(data);str='<small><span style="color:red">'+data+'</span></small>';return str}
ZP_DATA_get_PROFILE_PIC=function(data,type,row){if(type!="display")
return data;if(data&&data>'')
data="<img class='img-circle' src='"+data+"' width='25' height='25'>";else data="<img class='img-circle' src='images/default_avatar.jpg' width='25' height='25'>";return data}
$(document).ready(function(){$.fn.dataTableExt.sErrMode="console";jQuery.fn.dataTable.Api.register('page.jumpToData()',function(data,column){var pos=this.column(column,{order:'current'}).data().indexOf(data);if(pos>=0){var page=Math.floor(pos/this.page.info().length);this.page(page).draw(!1)}
return this});jQuery.fn.dataTable.Api.register('page.jumpToTime()',function(data,column){var pos=-1;var a=this.column(column,{order:'current'}).data();for(i=0;i<a.length;i++){if(a[i]>=data){pos=i;break}}
if(pos>=0){var page=Math.floor(pos/this.page.info().length);this.page(page).draw(!1)}
return this});jQuery.extend(jQuery.fn.dataTableExt.oSort,{"non-empty-string-asc":function(str1,str2){if(str1=="-"||!str1)
return 1;if(str2=="-"||!str2)
return-1;s1=parseFloat(str1);s2=parseFloat(str2);return((s1<s2)?-1:((s1>s2)?1:0))},"non-empty-string-desc":function(str1,str2){if(str1=="-"||!str1)
return 1;if(str2=="-"||!str2)
return-1;s1=parseFloat(str1);s2=parseFloat(str2);return((s1<s2)?1:((s1>s2)?-1:0))},})});function getDifficultyColor(data){if(data<=0)
str='-';else if(data>70)
str='red';else if(data>50)
str='orange';else if(data>30)
str='blue';else if(data>10)
str='green';else str='black';return str}
function ZP_get_event_name_from_id(id){if(typeof(ZP_VARS.event_list)=='undefined')
return '';if(ZP_VARS.event_list[id])
return ZP_VARS.event_list[id];return ''}
ZP_DATA_get_SKILL_RIDER=function(data,type,row,obj){if(type!="display")
return data;str='';str="<div style='width:90px'>";str+="<div class='pull-left'>"
if(row.div)
str+=' <span class="small label '+ZP_get_category_color(row.div)+' label-as-badge" style="font-size:8px;">'+ZP_get_division_name(row.div)+'</span> ';str+='</div>';str+='<div class="pull-right">';if(row.skill_gain>0)
str+=' <rsmall><i class="fa fa-plus fa-fw text-green"></i></rsmall> <small>'+row.skill_gain+'</small>';else if(row.skill>0)
str+='<small>'+row.skill+'</small><rsmall>pts</rsmall>';str+='</div>';str+='</div>';return str}
ZP_DATA_get_ZPOINTS_EVENT=function(data,type,row,obj){if(type!="display")
return data;if(!data||data==='0'||data===null)
return '';str=' <rsmall><i class="fa fa-plus fa-fw text-blue"></i></rsmall> <small>'+data+'</small>';return str}
ZP_DATA_get_RANKING_DIVISION=function(data,type,row,obj){if(type!="display")
return data;str='';d=data;dw=0;if(typeof(row.divw)!=='undefined')
dw=row.divw;if(dw>5)
dw=dw/10;if(d>5)
d=d/10;cat_name=ZP_DIV_TO_NAME(d);str='<span class="label '+ZP_get_category_color(d)+' label-as-badge" style="font-size:8px;">'+cat_name+'</span> ';if(dw){cat_name=ZP_DIV_TO_NAME(dw);str+=' <span class="label label-cat-F label-as-badge" style="font-size:8px;">'+cat_name+'</span> '}
return str}
ZP_DATA_get_RANKING_EVENT=function(data,type,row,obj){if(type!="display")
return data;if(!data||data==='0'||data===null)
return '';if(typeof(row.skill_gain)!=='undefined'&&row.skill_gain>0)
str='<small class="text-black">'+data+'</small>';else str='<small class="text-darkgray">'+data+'</small>';return str}
ZP_DATA_get_RANKING_EVENT_BEFORE=function(data,type,row,obj){if(type!="display")
return data;if(!data||data==='0'||data===null)
return '';str='<small class="text-black">'+data+'</small>';return str}
ZP_DATA_get_RANKING_STANDING=function(data,type,row,obj){if(type!="display")
return data;if(!data||data==='0'||data===null)
return '';str='<small>'+data+'</small>';return str}
ZP_DATA_get_RANKING_GAIN=function(data,type,row,obj){if(type!="display")
return data;if(!data||data==='0'||data===null)
return '';str="<small>"+data+' <i class="fa fa-chevron-down fa-fw text-orange"></i></small>';return str}
function getGridLabel(date){switch(date){case 'Results':label='darkgrey';break;case 'Tomorrow':label='blue';break;case 'Today':label='green';break;case 'Yesterday':label='maroon';break;default:label='darkgray';break}
return label}
ZP_DATA_get_POINTS=function(data,type,row){if(type!="display")
return data;if(data==0)
return '';str=data;t='';if(row.pts_pos==1)
t="<i class='fa fa-trophy' style='color:#FDD017'></i>";else if(row.pts_pos==2)
t="<i class='fa fa-trophy' style='color:#C0C0C0'></i>";else if(row.pts_pos==3)
t="<i class='fa fa-trophy' style='color:#CD7F32'></i>";str="<div style='width:50px'><div class='pull-left'><small>"+t+'</small></div><div class="pull-right">'+data+'</div></div>';return str}
function ZP_CAN_DISPLAY_COLUMN(v,d){if(typeof(ZP_VARS.display[v])=='undefined')
return d;return ZP_VARS.display[v]}
function ZP_CAN_DISPLAY_COLUMN_REVERSE(v,d){if(typeof(ZP_VARS.display[v])=='undefined')
return d;return !ZP_VARS.display[v]}
ZP_DATA_get_TIME_WITH_GAP=function(data,type,row){if(type!="display")
return data[0];if(!data[0])
return '-';str='';full_time=convertSecondsToTime(data[0]);stages='';if(row.stages)
stages=' <rsmall>(<b>'+row.stages+'</b>)</rsmall> ';if(!row.gap)
gap='';else if(row.gap<0)
gap='<b><rsmall>'+convertSecondsToTime(row.gap)+'</rsmall><rsmall>s</rsmall></b>';else if(row.gap<60)
gap='<b><rsmall>'+'+'+convertSecondsToTime(row.gap)+'</rsmall><rsmall>s</rsmall></b>';else gap='<rsmall>+'+convertSecondsToTime(row.gap)+'</rsmall>';width=gap?'100':'100';str="<div style='width:"+width+"px'><div class='pull-left'>"+full_time+'</div><div class="pull-right">'+gap+stages+'</div>'+' </div>';return str}
ZP_DATA_get_VTTA_TIME=function(vttat,vtta){str='';full_time=convertSecondsToTime(vttat);if(vtta<0)
gap='<b><rsmall>'+convertSecondsToTime(vtta)+'</rsmall><rsmall>s</rsmall></b>';else if(vtta<60)
gap='<b><rsmall>'+'+'+convertSecondsToTime(vtta)+'</rsmall><rsmall>s</rsmall></b>';else gap='<rsmall>+'+convertSecondsToTime(vtta)+'</rsmall>';width=gap?'100':'100';str="<div style='width:"+width+"px'><div class='pull-left'>"+full_time+'</div><div class="pull-right">'+gap+'</div>'+' </div>';return str}
ZP_DATA_get_TIME_WITH_DIFF=function(data,type,row){if(type!="display")
return data[0];if(!data[0])
return '-';str='';full_time=convertSecondsToTime(data[0]);abs=Math.abs(row.gap);if(!row.gap)
gap='';else if(row.gap<0)
gap='<b class="text-red"><small>'+'-'+convertSecondsToTime(abs)+'</small></b>';else gap='<b ><small>+'+convertSecondsToTime(abs)+'</small></b>';if(abs<60&&abs)
gap+='<rsmall>s</rsmall>';width=gap?'100':'100';str="<div style='width:"+width+"px'><div class='pull-left'>"+full_time+'</div><div class="pull-right">'+gap+'</div></div>';return str}
ZP_DATA_get_PRIME_TIME=function(rider){str='';if(ZP_VARS.prime_type=='elapsed'){full_time=convertSecondsToTime(rider.elapsed);if(!rider.elapsed_diff)
gap='';else if(rider.elapsed_diff<60)
gap='<b><rsmall>'+'+'+convertSecondsToTime(rider.elapsed_diff)+'</rsmall><rsmall>s</rsmall></b>';else gap='<rsmall>+'+convertSecondsToTime(rider.elapsed_diff)+'</rsmall>';str="<div style='width:70px'><div class='pull-left'><small>"+full_time+'</small></div><div class="pull-right"><small>'+gap+'</small></div>'+' </div>'}
else{if(!rider.msec_diff)
gap='';else if(rider.msec_diff<60)
gap='<b><rsmall>'+'+'+convertSecondsToTime(rider.msec_diff)+'</rsmall><rsmall>s</rsmall></b>';else gap='<rsmall>+'+convertSecondsToTime(rider.msec_diff)+'</rsmall>';pts='';str="<div style='width:70px'><div class='pull-left'><small>"+pts+'</small></div><div class="pull-right"><small>'+gap+'</small></div>'+' </div>'}
return str}
function explain_category(d){str='<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">';cnt=1;if(typeof(d.note)!=='undefined'&&d.note>''){str+='<tr><td>'+d.note+'</td></tr>';cnt++}
str+='</table>';return str}
window.chartColors={red:'rgb(255, 99, 132)',orange:'rgb(255, 159, 64)',yellow:'rgb(255, 205, 86)',green:'rgb(75, 192, 192)',blue:'rgb(54, 162, 235)',purple:'rgb(153, 102, 255)',grey:'rgb(201, 203, 207)'};ZP_DATA_get_SKILL_STANDINGS=function(data,type,row,obj){if(type!="display")
return data;str="<div style='width:90px'>";if(row.div)
str+='<div class="pull-left"><span class="small label '+ZP_get_category_color(row.div)+' label-as-badge" style="font-size:8px;">'+ZP_get_division_name(row.div)+'</span></div>';if(row.skill)
str+='<div class="pull-right"><small>'+numberWithCommas(row.skill)+'</small><rsmall>pts</rsmall></div>';str+'</div>';return str}
function ZP_DIV_TO_NAME(div){if(div==5)
return 'A+';if(div==10||div==1)
return 'A';if(div==20||div==2)
return 'B';if(div==30||div==3)
return 'C';if(div==40||div==4)
return 'D';return ''};table_zwift_rider_records=function(table_name){$(document).ready(function(){url="cache3/global/rider_records_totalDistance.json";table[table_name]=$('#'+table_name).DataTable({"ajax":url,"columns":[{data:"pos",className:'text-right text-nowrap',visible:!1,orderable:!1,},{data:"name",render:ZP_DATA_get_NAME,className:'text-left text-nowrap athlete_col',orderable:!1,},{data:"totalDistance",render:function(data,type,row){if(type!="display"){switch(ZP_VARS.rider_records_option){case 'totalWattHours':return row.totalWattHours;break;case 'totalTimeInMinutes':return row.totalTimeInMinutes;break;case 'totalDistanceClimbed':return row.totalDistanceClimbed;break;case 'totalDistance':default:return row.totalDistance;break}}
str='';switch(ZP_VARS.rider_records_option){case 'totalWattHours':str=numberWithCommas(row.totalWattHours)+'<rsmall> Wh</rsmall>';break;case 'totalTimeInMinutes':str=numberWithCommas(Math.round((row.totalTimeInMinutes/60)))+'<rsmall> hrs</rsmall>';break;case 'totalDistanceClimbed':str=numberWithCommas(row.totalDistanceClimbed)+'<rsmall> m</rsmall>';break;case 'totalDistance':default:str=numberWithCommas(Math.round((row.totalDistance/1000)))+'<rsmall> km</rsmall>';break}
return str},className:'text-right text-nowrap',orderable:!1,},],"paging":!1,"pageLength":50,"searching":!1,"deferRender":!0,"order":[[2,"desc"]],"autoWidth":!1,"lengthChange":!1,"info":!1,"ordering":!0,})})};var table=new Array();var ZWIFT_LIVE_TIMESTAMP=1414012476333;function load_table(table_name,table_func,var1){if(zwiftpower_functions[table_name])
return;zwiftpower_functions[table_name]=table_name;table_func(table_name,var1)}
$(document).ready(function(){ZP_VARS.utc_now=new Date();ZP_VARS.utc_now_timestamp=ZP_VARS.utc_now.getTime();ZP_VARS.now=new Date((new Date().getTime())+parseInt(ZP_VARS.timezone_offset)*1000);ZP_VARS.date.month_names=["January","February","March","April","May","June","July","August","September","October","November","December"];ZP_VARS.date.days_of_week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];time=ZP_VARS.now.getUTCSeconds()+ZP_VARS.now.getUTCMinutes()*60+ZP_VARS.now.getUTCHours()*3600;ZP_VARS.date.timestamp=ZP_VARS.now.getTime();ZP_VARS.date.start_of_day=ZP_VARS.now.getTime()-(time*1000);for(var key in zwiftpower_functions){var key=zwiftpower_functions[key](key)}});function getTimeRemaining(endtime){var t=Date.parse(endtime)-Date.parse(new Date());var seconds=Math.floor((t/1000)%60);var minutes=Math.floor((t/1000/60)%60);var hours=Math.floor((t/(1000*60*60))%24);var days=Math.floor(t/(1000*60*60*24));return{'total':t,'days':days,'hours':hours,'minutes':minutes,'seconds':seconds}}
function initializeClock(id,endtime){var clock=document.getElementById(id);var daysSpan=clock.querySelector('.days');var hoursSpan=clock.querySelector('.hours');var minutesSpan=clock.querySelector('.minutes');var secondsSpan=clock.querySelector('.seconds');function updateClock(){var t=getTimeRemaining(endtime);daysSpan.innerHTML=t.days;hoursSpan.innerHTML=('0'+t.hours).slice(-2);minutesSpan.innerHTML=('0'+t.minutes).slice(-2);secondsSpan.innerHTML=('0'+t.seconds).slice(-2);if(t.total<=0){clearInterval(timeinterval)}}
updateClock();var timeinterval=setInterval(updateClock,1000)}
$(".panel-heading.panel-collapse").click(function(e){$header=$(this);$content=$header.next();$content.slideToggle(500,function(){$header.text(function(){if($content.is(":visible")){$header.find('.collapse_icon').removeClass('glyphicon-chevron-down');$header.find('.collapse_icon').addClass('glyphicon-chevron-up')}
else{$header.find('.collapse_icon').removeClass('glyphicon-chevron-up');$header.find('.collapse_icon').addClass('glyphicon-chevron-down')}})})});function convertSecondsToTime(time){var mins=~~(time/60);var secs=time%60;var hrs=~~(time/3600);var mins=~~((time%3600)/60);var secs=time%60;if(hrs||mins)
secs=~~secs;else{secs=secs.toFixed(3);if(secs%1==0)
secs=Math.round(secs)}
var ret="";if(hrs>0){ret+=""+hrs+":";if(mins>0){ret+=(mins<10?"0":"")+mins+":"+(secs<10?"0":"")}
else ret+='00:'}
else if(mins>0){ret+=""+(mins<10?"0":"")+mins+":"+(secs<10?"0":"")}
ret+=""+secs;return ret}
function timeStamp(tstamp,timezone,options){options=typeof options!=='undefined'?options:{};tz=parseInt(tstamp)+parseInt(timezone);var now=new Date(tz*1000);var date=[now.getUTCMonth()+1,now.getUTCDate()];if(options.compactDate){date.push(now.getUTCFullYear()-2000)}
else{date.push(now.getUTCFullYear())}
var time=[now.getUTCHours(),now.getUTCMinutes()];if(!options.compactTime){time.push(now.getUTCSeconds())}
var suffix='';if(options.suffix)
suffix=(time[0]<12)?" AM":" PM";time_from=0;if(options.simpleTime){time[0]=(time[0]<12)?time[0]:time[0]-12;time[0]=time[0]||12;time_from=1}
for(var i=time_from;i<3;i++){if(time[i]<10){time[i]="0"+time[i]}}
var mstr='';if(!options.ignoreDate)
mstr=date.join("/");if(!options.ignoreTime){if(!options.ignoreDate)
mstr+=' ';mstr+=time.join(":")}
return mstr}
function getRelativeDate(tstamp,timezone,include_date){tz=parseInt(tstamp)+parseInt(timezone);var rel=new Date(tz*1000);time=rel.getTime();if(time<ZP_VARS.date.start_of_day+86400000*2){if(time>ZP_VARS.date.start_of_day+86400000)
return 'Tomorrow';else if(time>ZP_VARS.date.start_of_day)
return 'Today';else if(time>ZP_VARS.date.start_of_day-86400000)
return 'Yesterday';else if(time>ZP_VARS.date.start_of_day-(86400000*6)){return ZP_VARS.date.days_of_week[rel.getUTCDay()]}}
day_of_week=ZP_VARS.date.days_of_week[rel.getUTCDay()];day=rel.getUTCDate();month=rel.getUTCMonth();year=rel.getUTCFullYear();dstr=(include_date)?day_of_week+' ':'';dstr+=day+' '+ZP_VARS.date.month_names[month]+' '+year;return dstr}
function getShortDate(tstamp,timezone){tz=parseInt(tstamp)+parseInt(timezone);var rel=new Date(tz*1000);time=rel.getTime();day_of_week=rel.getUTCDay();day=rel.getUTCDate();month=rel.getUTCMonth();year=rel.getUTCFullYear();dstr=day+' '+ZP_VARS.date.month_names[month]+' '+year;return dstr}
function resetColumns(table_name){$('#'+table_name+'_colvis ul li input').each(function(index){hide=$(this).data('hide');if(hide)
$(this).prop('checked',!1);else $(this).prop('checked',!0);index=$(this).data('index');table[table_name].column(index).visible(!hide)})}
function updateColumnChooser(table_name){$('#'+table_name+'_colvis ul li input').each(function(index){index=$(this).data('index');if(!table[table_name].column(index).visible())
$(this).prop('checked',!1)})}
function buildColumnChooser(table_name){if(zwiftpower_functions[table_name+'_colvis'])
return;zwiftpower_functions[table_name+'_colvis']=!0;var build_button=' \
        <div id="columnFilter" class="btn-group"> \
            <button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown"> \
                <span class="margin-r-5">Columns </span><span class="caret"></span> \
            </button> \
            <ul class="dropdown-menu"> \
            <li class="column_select" title="Reset view"> \
            <span class="text-nowrap;" style="display: inline-block;"> \
                <a href="#" id="resetColumns_'+table_name+'" data-table="'+table_name+'"; class="text-red">Reset view</a> \
            </span> \
            </li> \
    ';$('#'+table_name+' th').each(function(index){if($(this).data('ignore'))
return;if($(this).data('vname'))
name=$(this).data('vname');else name=$(this).html();hide=0;if($(this).data('hide'))
hide=1;build_button+=' \
                <li id="'+table_name+'_view_'+index+'" data-index="'+index+'"  class="column_select" title=""> \
                <span class="text-nowrap;" style="display: inline-block;"> \
                    <input type="checkbox" id="'+table_name+'_column_'+index+'" data-index="'+index+'" data-hide="'+hide+'" class="columnChooser minimal" checked="checked" /> '+name+'</i> \
                </span> \
                </li> \
    '});build_button+=' \
    </ul> \
    </div> \
    ';$('#'+table_name+'_colvis').html(build_button);$('#resetColumns_'+table_name).on('click',function(e){resetColumns(table_name);return !1});$("input[id^='"+table_name+"_column_']").on('change',function(e){visible=e.currentTarget.checked;index=e.currentTarget.dataset.index;table[table_name].column(index).visible(visible)
return !1});$("li[id^='"+table_name+"_view_']").on('click',function(e){index=e.currentTarget.dataset.index;$('#'+table_name+'_column_'+index).click();e.stopPropagation()})}
function explain_event(d){$.ajax({url:"cache3/desc/"+d.zid+".txt",dataType:"text",success:function(data){$("#event_desc"+d.zid).html(data)}});str='';str+='<div class="panel panel-green" style=""><div class="panel-heading" >Description';str+='</div>';str+='<div class="panel-body" style="padding:5px 15px;background-color:#fcfcfc"><p style="white-space: pre-line;" id="event_desc'+d.zid+'">';str+='</p></div>';str+='<div class="panel-footer">';str+='</div>';str+='</div>';return str}
function requestLatestResults(zid){table.table_event_results_zwift.ajax.reload();table.table_event_results_final.ajax.reload()}
function updateNow(){ZP_VARS.utc_now=new Date();ZP_VARS.utc_now_timestamp=ZP_VARS.utc_now.getTime()}
function startUpdateTimer(options){options.last_values=Object.assign({},options.fields);options.end=ZP_VARS.utc_now_timestamp+options.timeout*1000;options.timer=setInterval(function(){$.ajax({url:options.url,dataType:"json",error:function(){updateNow();if(ZP_VARS.utc_now_timestamp>options.end)
clearInterval(options.timer)},success:function(data){updateNow();if(ZP_VARS.utc_now_timestamp>options.end)
clearInterval(options.timer);for(t in data){if(typeof(options.fields[t])=='undefined')
continue;field=options.fields[t];value=data[t];if(typeof(field)==='function'){if(options.last_values[t]!=field&&value!=options.last_values[t])
field()}
else{$('#'+field).html(value);if(options.last_values[t]!=field&&value!=options.last_values[t])
$('#'+field).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000)}
options.last_values[t]=value}},})},options.interval)}
function convertTimeToDay(tstamp){tz=parseInt(tstamp)+parseInt(ZP_VARS.timezone_offset);var rel=new Date(tz*1000);time=rel.getTime();a=(time-ZP_VARS.date.start_of_day)/86400000;b=Math.floor(a+0.01);str='DAY_'+b+' ';if(time>(ZP_VARS.date.timestamp-3600000)){str+='DAY_FUTURE'}
else{str+='DAY_PAST'}
return str}
function convertTimeToDayPart(tstamp){tz=parseInt(tstamp)+parseInt(ZP_VARS.timezone_offset);var rel=new Date(tz*1000);time=rel.getTime();a=(time-ZP_VARS.date.start_of_day)/86400000;b=Math.floor(a);b=Math.abs(b);c=Math.abs(a);if(Math.abs(b-c)<0.5)
return 'TIME_MORNING';else return 'TIME_AFTERNOON'}
var criticalPower_options={lines:{show:!0,fill:!0,fillColor:"rgba(11, 98, 164, 0.5)",lineWidth:1},points:{show:!0},xaxis:{ticks:[2,3,5,10,15,30,60,120,300,600,1200,3600],transform:function(v){return Math.log(v)},inverseTransform:function(v){return Math.exp(v)},tickFormatter:function(label,series){var hours=parseInt(label/3600)%24;var minutes=parseInt(label/60)%60;var seconds=label%60;var result=(hours>0?hours+"h":(minutes>0?minutes+"m":seconds+'s'));return result}},yaxis:{tickFormatter:function(label,series){if(label>0)return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+' w';else return ''}},grid:{hoverable:!0,borderWidth:{top:0,right:0,bottom:0,left:0}}};var graph_heart_rate_options={lines:{show:!0,fill:!1,fillColor:'rgba(255, 0, 0, 1)',lineWidth:1},points:{show:!1},xaxis:{show:!1,},yaxis:{min:0,tickLength:0,tickFormatter:function(label,series){return label+' bpm'},},grid:{hoverable:!0,tickLength:0,borderWidth:{top:0,right:0,bottom:0,left:0}}};var graph_power_options_master={lines:{show:!0,fill:!1,fillColor:"rgba(11, 98, 164, 1)",lineWidth:1},points:{show:!1},xaxis:{show:!1,},yaxis:{max:1000,tickLength:0,tickFormatter:function(label,series){return label+' watts'}},grid:{hoverable:!0,tickLength:0,borderWidth:{top:0,right:0,bottom:0,left:0},},};function power_metrics(d){gid=d.zwid+'_'+d.zid;bgcolor='#f7f7f7';if(ZP_VARS.bgcolor_graphs)
bgcolor=ZP_VARS.bgcolor_graphs;str=''+'<div class="row" style="padding:0px;margin:0px 50px;background-color:'+bgcolor+'">'+'	<div class="col-lg-4">'+'      	<div id="power_distribution_'+gid+'" style="width:400px; height:125px"></div>'+'          <div id="critical_'+gid+'" style="width:400px; height:125px"></div>'+'	</div>'+'	<div class="col-lg-8">'+'          		<div id="graph_power_master_'+gid+'" style="width:900px; height:125px;"></div><BR>'+'         			<div id="graph_heart_rate_'+gid+'" style="width:900px; height:125px;"></div>'+'	</div>'+'</div>';str+='<div class="row" style="padding:0px;margin:0px 50px;background-color:'+bgcolor+'">';str+='	<div class="pull-left">'+'  <div id="ant_'+gid+'"></div>'+'	</div>';if(d.act_id>0){str+='	<div class="pull-right">'+'  <a href="https://www.strava.com/activities/'+d.act_id+'" target="_new"><img src="images/strava_small.png" height="22px"><button class="btn btn-xs">View Activity</button></a>'+'	</div>'}
str+='</div>';if(d.note){str+='<b>'+d.note+'</b>'}
return str}
function power_metrics_initiate(row){$.ajax({url:"api3.php?do=power_metrics&zwid="+row.data().zwid+'&zid='+row.data().zid+'&smoothing='+$('#smoothing').val(),dataType:"json",success:function(data){gid=row.data().zwid+'_'+row.data().zid;graph_heart_rate_options.grid.markings=[{color:"rgba(127, 127, 127, 1)",lineWidth:1,yaxis:{from:data.avg_hr,to:data.avg_hr}}];graph_power_options_master.grid.markings=[{color:"rgba(127, 127, 127, 1)",lineWidth:1,yaxis:{from:data.avg_power,to:data.avg_power}}];power=[];for(var i=0;i<data.power.length;++i){power.push([i,data.power[i]])}
hr=[];for(var i=0;i<data.hr.length;++i){hr.push([i,data.hr[i]])}
cadence=[];for(var i=0;i<data.cadence.length;++i){cadence.push([i,data.cadence[i]])}
critical=[];critical_ticks=[];for(var key in data.critical){critical.push([key,data.critical[key]]);critical_ticks.push(key)}
criticalPower_options.xaxis.ticks=critical_ticks;histogram=[];for(var key in data.histogram){histogram.push([key,data.histogram[key]])}
var graph_power={'color':'rgba(11, 98, 164, 0.8)','data':power};var graph_heart_rate={'color':'rgba(255, 0, 0, 0.8)','data':hr};var np=277;var markings=[{color:"rgba(203, 75, 75, 1)",lineWidth:2,xaxis:{from:data.np,to:data.np}}];var power_distribution_options={points:{show:!1},xaxis:{show:!0,min:0,tickSize:100,tickFormatter:function(label,series){return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+' w'}},yaxis:{min:0,label:'time in zone',tickSize:300,tickFormatter:function(label,series){if(label==0)return "";return(label/60)+' min'}},grid:{borderWidth:{top:0,right:0,bottom:0,left:0},markings:markings},legend:{show:!1}};var power_distribution={'color':'rgba(77, 167, 77, 0.8)',bars:{show:!0,zero:!1,barWidth:25,fillColor:"rgba(77, 167, 77, 0.6)",lineWidth:1},'data':histogram};var criticalPower={'color':'rgba(11, 98, 164, 1)','data':critical};var plot_pd=$.plot('#power_distribution_'+gid,[power_distribution],power_distribution_options);var o=plot_pd.pointOffset({x:data.np,y:plot_pd.height()});$('#power_distribution_'+gid).append("<span style='background-color: #fafafa; top: 12px; color: #333; text-align: center; font-size: 12px; border: 1px solid #ddd; border-radius: 5px; padding: 3px 7px; position: absolute; left:50px'><strong>Avg</strong> "+data.avg_power+" w</span>");$('#power_distribution_'+gid).append("<span style='background-color: #fafafa; top: 12px; color: #333; text-align: center; font-size: 12px; border: 1px solid #ddd; border-radius: 5px; padding: 3px 7px; position: absolute; right:20px'><strong>NP</strong> "+data.np+" w</span>");$("#critical_"+gid).bind("plothover",function(event,pos,item){if(item){var x=item.datapoint[0].toFixed(0),y=item.datapoint[1].toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");var currentColor=item.series.color;var lastComma=currentColor.lastIndexOf(',');var newColor=currentColor.slice(0,lastComma+1)+"0.1)";$("#tooltip").html('<strong>'+item.series.xaxis.ticks[item.dataIndex].label+'</strong><br>'+y+' w').css({top:item.pageY-45,left:item.pageX+5,"border-color":item.series.color,"background-color":newColor}).fadeIn(200);$("#tooltip_bg").html('<strong>'+item.series.xaxis.ticks[item.dataIndex].label+'</strong><br>'+y+' w').css({top:item.pageY-45,left:item.pageX+5}).fadeIn(200)}else{$("#tooltip").hide();$("#tooltip_bg").hide()}});$('#graph_heart_rate_'+gid).bind("plothover",function(event,pos,item){if(item){power='';if(typeof(ZP_VARS.graph_power_master[gid])!=='undefined')
power=ZP_VARS.graph_power_master[gid].getData()[0].data[item.datapoint[0]][1];var x=item.datapoint[0].toFixed(0),y=item.datapoint[1].toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");var currentColor=item.series.color;var lastComma=currentColor.lastIndexOf(',');var newColor=currentColor.slice(0,lastComma+1)+"0.1)";$("#tooltip").html(power+' w<BR>'+y+' bpm').css({top:item.pageY-45,left:item.pageX+5,"border-color":item.series.color,"background-color":newColor}).fadeIn(200);$("#tooltip_bg").html(power+' w<BR>'+y+' bpm').css({top:item.pageY-45,left:item.pageX+5}).fadeIn(200)}else{$("#tooltip").hide();$("#tooltip_bg").hide()}});$('#graph_power_master_'+gid).bind("plothover",function(event,pos,item){if(item){hr='';if(typeof(ZP_VARS.graph_heart_rate[gid])!=='undefined')
hr=ZP_VARS.graph_heart_rate[gid].getData()[0].data[item.datapoint[0]][1];var x=item.datapoint[0].toFixed(0),y=item.datapoint[1].toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");var currentColor=item.series.color;var lastComma=currentColor.lastIndexOf(',');var newColor=currentColor.slice(0,lastComma+1)+"0.1)";$("#tooltip").html(y+' w<BR>'+hr+' bpm').css({top:item.pageY-45,left:item.pageX+5,"border-color":item.series.color,"background-color":newColor}).fadeIn(200);$("#tooltip_bg").html(y+' w<BR>'+hr+' bpm').css({top:item.pageY-45,left:item.pageX+5}).fadeIn(200)}else{$("#tooltip").hide();$("#tooltip_bg").hide()}});if(typeof(ZP_VARS.graph_power)==='undefined'){ZP_VARS.graph_power_master=[];ZP_VARS.graph_heart_rate=[];ZP_VARS.graph_critical=[]}
ZP_VARS.graph_power_master[gid]=$.plot('#graph_power_master_'+gid,[graph_power],graph_power_options_master);var data_add=[];data_add.push({lines:{show:!0,fill:!1,fillColor:'rgba(255, 0, 0, 1)',lineWidth:1},points:{show:!1},shadowSize:1,color:"#c00",data:hr,});data_add.push({lines:{show:!0,fill:!1,fillColor:'rgba(255, 0, 0, 1)',lineWidth:1},points:{show:!1},shadowSize:1,color:"#0c0",data:cadence,});if(data.avg_hr>0)
ZP_VARS.graph_heart_rate[gid]=$.plot('#graph_heart_rate_'+gid,data_add,graph_heart_rate_options);ZP_VARS.graph_critical[gid]=$.plot('#critical_'+gid,[criticalPower],criticalPower_options);str='';for(i=2;i<=10;i++){if(data.ant[i]>0){if(str.length)
str+=', ';str+='<b>'+i+':</b> <span class="text-orange">'+data.ant[i]+'</span>'}}
$('#ant_'+gid).html(str)}})}
function htmlEncode(value){return $('<div/>').text(value).html()}
function htmlDecode(value){return $('<div/>').html(value).text()}
function numberWithCommas(x){return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}
function getRandomColor(){var letters='0123456789ABCDEF';var color='#';for(var i=0;i<6;i++){color+=letters[Math.floor(Math.random()*16)]}
return color}
function get_analysis_perc(d1,d2,i){rnd=Math.round((d2/d1)*10000);perc=(10000-rnd)/100;if(i)
str=((perc>0)?'+':'')+perc+'<rsmall>%</rsmall>';else str+=d1+'<rsmall>w</rsmall>';return str}
var CryptoJS=CryptoJS||function(u,p){var d={},l=d.lib={},s=function(){},t=l.Base={extend:function(a){s.prototype=this;var c=new s;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},r=l.WordArray=t.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=p?c:4*a.length},toString:function(a){return(a||v).stringify(this)},concat:function(a){var c=this.words,e=a.words,j=this.sigBytes;a=a.sigBytes;this.clamp();if(j%4)for(var k=0;k<a;k++)c[j+k>>>2]|=(e[k>>>2]>>>24-8*(k%4)&255)<<24-8*((j+k)%4);else if(65535<e.length)for(k=0;k<a;k+=4)c[j+k>>>2]=e[k>>>2];else c.push.apply(c,e);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<32-8*(c%4);a.length=u.ceil(c/4)},clone:function(){var a=t.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],e=0;e<a;e+=4)c.push(4294967296*u.random()|0);return new r.init(c,a)}}),w=d.enc={},v=w.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++){var k=c[j>>>2]>>>24-8*(j%4)&255;e.push((k>>>4).toString(16));e.push((k&15).toString(16))}return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j+=2)e[j>>>3]|=parseInt(a.substr(j,2),16)<<24-4*(j%8);return new r.init(e,c/2)}},b=w.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++)e.push(String.fromCharCode(c[j>>>2]>>>24-8*(j%4)&255));return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j++)e[j>>>2]|=(a.charCodeAt(j)&255)<<24-8*(j%4);return new r.init(e,c)}},x=w.Utf8={stringify:function(a){try{return decodeURIComponent(escape(b.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data")}},parse:function(a){return b.parse(unescape(encodeURIComponent(a)))}},q=l.BufferedBlockAlgorithm=t.extend({reset:function(){this._data=new r.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=x.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,e=c.words,j=c.sigBytes,k=this.blockSize,b=j/(4*k),b=a?u.ceil(b):u.max((b|0)-this._minBufferSize,0);a=b*k;j=u.min(4*a,j);if(a){for(var q=0;q<a;q+=k)this._doProcessBlock(e,q);q=e.splice(0,a);c.sigBytes-=j}return new r.init(q,j)},clone:function(){var a=t.clone.call(this);a._data=this._data.clone();return a},_minBufferSize:0});l.Hasher=q.extend({cfg:t.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,e){return(new a.init(e)).finalize(b)}},_createHmacHelper:function(a){return function(b,e){return(new n.HMAC.init(a,e)).finalize(b)}}});var n=d.algo={};return d}(Math);(function(){var u=CryptoJS,p=u.lib.WordArray;u.enc.Base64={stringify:function(d){var l=d.words,p=d.sigBytes,t=this._map;d.clamp();d=[];for(var r=0;r<p;r+=3)for(var w=(l[r>>>2]>>>24-8*(r%4)&255)<<16|(l[r+1>>>2]>>>24-8*((r+1)%4)&255)<<8|l[r+2>>>2]>>>24-8*((r+2)%4)&255,v=0;4>v&&r+0.75*v<p;v++)d.push(t.charAt(w>>>6*(3-v)&63));if(l=t.charAt(64))for(;d.length%4;)d.push(l);return d.join("")},parse:function(d){var l=d.length,s=this._map,t=s.charAt(64);t&&(t=d.indexOf(t),-1!=t&&(l=t));for(var t=[],r=0,w=0;w<l;w++)if(w%4){var v=s.indexOf(d.charAt(w-1))<<2*(w%4),b=s.indexOf(d.charAt(w))>>>6-2*(w%4);t[r>>>2]|=(v|b)<<24-8*(r%4);r++}return p.create(t,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();(function(u){function p(b,n,a,c,e,j,k){b=b+(n&a|~n&c)+e+k;return(b<<j|b>>>32-j)+n}function d(b,n,a,c,e,j,k){b=b+(n&c|a&~c)+e+k;return(b<<j|b>>>32-j)+n}function l(b,n,a,c,e,j,k){b=b+(n^a^c)+e+k;return(b<<j|b>>>32-j)+n}function s(b,n,a,c,e,j,k){b=b+(a^(n|~c))+e+k;return(b<<j|b>>>32-j)+n}for(var t=CryptoJS,r=t.lib,w=r.WordArray,v=r.Hasher,r=t.algo,b=[],x=0;64>x;x++)b[x]=4294967296*u.abs(u.sin(x+1))|0;r=r.MD5=v.extend({_doReset:function(){this._hash=new w.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(q,n){for(var a=0;16>a;a++){var c=n+a,e=q[c];q[c]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360}var a=this._hash.words,c=q[n+0],e=q[n+1],j=q[n+2],k=q[n+3],z=q[n+4],r=q[n+5],t=q[n+6],w=q[n+7],v=q[n+8],A=q[n+9],B=q[n+10],C=q[n+11],u=q[n+12],D=q[n+13],E=q[n+14],x=q[n+15],f=a[0],m=a[1],g=a[2],h=a[3],f=p(f,m,g,h,c,7,b[0]),h=p(h,f,m,g,e,12,b[1]),g=p(g,h,f,m,j,17,b[2]),m=p(m,g,h,f,k,22,b[3]),f=p(f,m,g,h,z,7,b[4]),h=p(h,f,m,g,r,12,b[5]),g=p(g,h,f,m,t,17,b[6]),m=p(m,g,h,f,w,22,b[7]),f=p(f,m,g,h,v,7,b[8]),h=p(h,f,m,g,A,12,b[9]),g=p(g,h,f,m,B,17,b[10]),m=p(m,g,h,f,C,22,b[11]),f=p(f,m,g,h,u,7,b[12]),h=p(h,f,m,g,D,12,b[13]),g=p(g,h,f,m,E,17,b[14]),m=p(m,g,h,f,x,22,b[15]),f=d(f,m,g,h,e,5,b[16]),h=d(h,f,m,g,t,9,b[17]),g=d(g,h,f,m,C,14,b[18]),m=d(m,g,h,f,c,20,b[19]),f=d(f,m,g,h,r,5,b[20]),h=d(h,f,m,g,B,9,b[21]),g=d(g,h,f,m,x,14,b[22]),m=d(m,g,h,f,z,20,b[23]),f=d(f,m,g,h,A,5,b[24]),h=d(h,f,m,g,E,9,b[25]),g=d(g,h,f,m,k,14,b[26]),m=d(m,g,h,f,v,20,b[27]),f=d(f,m,g,h,D,5,b[28]),h=d(h,f,m,g,j,9,b[29]),g=d(g,h,f,m,w,14,b[30]),m=d(m,g,h,f,u,20,b[31]),f=l(f,m,g,h,r,4,b[32]),h=l(h,f,m,g,v,11,b[33]),g=l(g,h,f,m,C,16,b[34]),m=l(m,g,h,f,E,23,b[35]),f=l(f,m,g,h,e,4,b[36]),h=l(h,f,m,g,z,11,b[37]),g=l(g,h,f,m,w,16,b[38]),m=l(m,g,h,f,B,23,b[39]),f=l(f,m,g,h,D,4,b[40]),h=l(h,f,m,g,c,11,b[41]),g=l(g,h,f,m,k,16,b[42]),m=l(m,g,h,f,t,23,b[43]),f=l(f,m,g,h,A,4,b[44]),h=l(h,f,m,g,u,11,b[45]),g=l(g,h,f,m,x,16,b[46]),m=l(m,g,h,f,j,23,b[47]),f=s(f,m,g,h,c,6,b[48]),h=s(h,f,m,g,w,10,b[49]),g=s(g,h,f,m,E,15,b[50]),m=s(m,g,h,f,r,21,b[51]),f=s(f,m,g,h,u,6,b[52]),h=s(h,f,m,g,k,10,b[53]),g=s(g,h,f,m,B,15,b[54]),m=s(m,g,h,f,e,21,b[55]),f=s(f,m,g,h,v,6,b[56]),h=s(h,f,m,g,x,10,b[57]),g=s(g,h,f,m,t,15,b[58]),m=s(m,g,h,f,D,21,b[59]),f=s(f,m,g,h,z,6,b[60]),h=s(h,f,m,g,C,10,b[61]),g=s(g,h,f,m,j,15,b[62]),m=s(m,g,h,f,A,21,b[63]);a[0]=a[0]+f|0;a[1]=a[1]+m|0;a[2]=a[2]+g|0;a[3]=a[3]+h|0},_doFinalize:function(){var b=this._data,n=b.words,a=8*this._nDataBytes,c=8*b.sigBytes;n[c>>>5]|=128<<24-c%32;var e=u.floor(a/4294967296);n[(c+64>>>9<<4)+15]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360;n[(c+64>>>9<<4)+14]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(n.length+1);this._process();b=this._hash;n=b.words;for(a=0;4>a;a++)c=n[a],n[a]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360;return b},clone:function(){var b=v.clone.call(this);b._hash=this._hash.clone();return b}});t.MD5=v._createHelper(r);t.HmacMD5=v._createHmacHelper(r)})(Math);(function(){var u=CryptoJS,p=u.lib,d=p.Base,l=p.WordArray,p=u.algo,s=p.EvpKDF=d.extend({cfg:d.extend({keySize:4,hasher:p.MD5,iterations:1}),init:function(d){this.cfg=this.cfg.extend(d)},compute:function(d,r){for(var p=this.cfg,s=p.hasher.create(),b=l.create(),u=b.words,q=p.keySize,p=p.iterations;u.length<q;){n&&s.update(n);var n=s.update(d).finalize(r);s.reset();for(var a=1;a<p;a++)n=s.finalize(n),s.reset();b.concat(n)}b.sigBytes=4*q;return b}});u.EvpKDF=function(d,l,p){return s.create(p).compute(d,l)}})();CryptoJS.lib.Cipher||function(u){var p=CryptoJS,d=p.lib,l=d.Base,s=d.WordArray,t=d.BufferedBlockAlgorithm,r=p.enc.Base64,w=p.algo.EvpKDF,v=d.Cipher=t.extend({cfg:l.extend(),createEncryptor:function(e,a){return this.create(this._ENC_XFORM_MODE,e,a)},createDecryptor:function(e,a){return this.create(this._DEC_XFORM_MODE,e,a)},init:function(e,a,b){this.cfg=this.cfg.extend(b);this._xformMode=e;this._key=a;this.reset()},reset:function(){t.reset.call(this);this._doReset()},process:function(e){this._append(e);return this._process()},finalize:function(e){e&&this._append(e);return this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(e){return{encrypt:function(b,k,d){return("string"==typeof k?c:a).encrypt(e,b,k,d)},decrypt:function(b,k,d){return("string"==typeof k?c:a).decrypt(e,b,k,d)}}}});d.StreamCipher=v.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var b=p.mode={},x=function(e,a,b){var c=this._iv;c?this._iv=u:c=this._prevBlock;for(var d=0;d<b;d++)e[a+d]^=c[d]},q=(d.BlockCipherMode=l.extend({createEncryptor:function(e,a){return this.Encryptor.create(e,a)},createDecryptor:function(e,a){return this.Decryptor.create(e,a)},init:function(e,a){this._cipher=e;this._iv=a}})).extend();q.Encryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize;x.call(this,e,a,c);b.encryptBlock(e,a);this._prevBlock=e.slice(a,a+c)}});q.Decryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize,d=e.slice(a,a+c);b.decryptBlock(e,a);x.call(this,e,a,c);this._prevBlock=d}});b=b.CBC=q;q=(p.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,d=c<<24|c<<16|c<<8|c,l=[],n=0;n<c;n+=4)l.push(d);c=s.create(l,c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};d.BlockCipher=v.extend({cfg:v.cfg.extend({mode:b,padding:q}),reset:function(){v.reset.call(this);var a=this.cfg,b=a.iv,a=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var c=a.createEncryptor;else c=a.createDecryptor,this._minBufferSize=1;this._mode=c.call(a,this,b&&b.words)},_doProcessBlock:function(a,b){this._mode.processBlock(a,b)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,this.blockSize);var b=this._process(!0)}else b=this._process(!0),a.unpad(b);return b},blockSize:4});var n=d.CipherParams=l.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),b=(p.format={}).OpenSSL={stringify:function(a){var b=a.ciphertext;a=a.salt;return(a?s.create([1398893684,1701076831]).concat(a).concat(b):b).toString(r)},parse:function(a){a=r.parse(a);var b=a.words;if(1398893684==b[0]&&1701076831==b[1]){var c=s.create(b.slice(2,4));b.splice(0,4);a.sigBytes-=16}return n.create({ciphertext:a,salt:c})}},a=d.SerializableCipher=l.extend({cfg:l.extend({format:b}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var l=a.createEncryptor(c,d);b=l.finalize(b);l=l.cfg;return n.create({ciphertext:b,key:c,iv:l.iv,algorithm:a,mode:l.mode,padding:l.padding,blockSize:a.blockSize,formatter:d.format})},decrypt:function(a,b,c,d){d=this.cfg.extend(d);b=this._parse(b,d.format);return a.createDecryptor(c,d).finalize(b.ciphertext)},_parse:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),p=(p.kdf={}).OpenSSL={execute:function(a,b,c,d){d||(d=s.random(8));a=w.create({keySize:b+c}).compute(a,d);c=s.create(a.words.slice(b),4*c);a.sigBytes=4*b;return n.create({key:a,iv:c,salt:d})}},c=d.PasswordBasedCipher=a.extend({cfg:a.cfg.extend({kdf:p}),encrypt:function(b,c,d,l){l=this.cfg.extend(l);d=l.kdf.execute(d,b.keySize,b.ivSize);l.iv=d.iv;b=a.encrypt.call(this,b,c,d.key,l);b.mixIn(d);return b},decrypt:function(b,c,d,l){l=this.cfg.extend(l);c=this._parse(c,l.format);d=l.kdf.execute(d,b.keySize,b.ivSize,c.salt);l.iv=d.iv;return a.decrypt.call(this,b,c,d.key,l)}})}();(function(){for(var u=CryptoJS,p=u.lib.BlockCipher,d=u.algo,l=[],s=[],t=[],r=[],w=[],v=[],b=[],x=[],q=[],n=[],a=[],c=0;256>c;c++)a[c]=128>c?c<<1:c<<1^283;for(var e=0,j=0,c=0;256>c;c++){var k=j^j<<1^j<<2^j<<3^j<<4,k=k>>>8^k&255^99;l[e]=k;s[k]=e;var z=a[e],F=a[z],G=a[F],y=257*a[k]^16843008*k;t[e]=y<<24|y>>>8;r[e]=y<<16|y>>>16;w[e]=y<<8|y>>>24;v[e]=y;y=16843009*G^65537*F^257*z^16843008*e;b[k]=y<<24|y>>>8;x[k]=y<<16|y>>>16;q[k]=y<<8|y>>>24;n[k]=y;e?(e=z^a[a[a[G^z]]],j^=a[a[j]]):e=j=1}var H=[0,1,2,4,8,16,32,64,128,27,54],d=d.AES=p.extend({_doReset:function(){for(var a=this._key,c=a.words,d=a.sigBytes/4,a=4*((this._nRounds=d+6)+1),e=this._keySchedule=[],j=0;j<a;j++)if(j<d)e[j]=c[j];else{var k=e[j-1];j%d?6<d&&4==j%d&&(k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255]):(k=k<<8|k>>>24,k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255],k^=H[j/d|0]<<24);e[j]=e[j-d]^k}c=this._invKeySchedule=[];for(d=0;d<a;d++)j=a-d,k=d%4?e[j]:e[j-4],c[d]=4>d||4>=j?k:b[l[k>>>24]]^x[l[k>>>16&255]]^q[l[k>>>8&255]]^n[l[k&255]]},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._keySchedule,t,r,w,v,l)},decryptBlock:function(a,c){var d=a[c+1];a[c+1]=a[c+3];a[c+3]=d;this._doCryptBlock(a,c,this._invKeySchedule,b,x,q,n,s);d=a[c+1];a[c+1]=a[c+3];a[c+3]=d},_doCryptBlock:function(a,b,c,d,e,j,l,f){for(var m=this._nRounds,g=a[b]^c[0],h=a[b+1]^c[1],k=a[b+2]^c[2],n=a[b+3]^c[3],p=4,r=1;r<m;r++)var q=d[g>>>24]^e[h>>>16&255]^j[k>>>8&255]^l[n&255]^c[p++],s=d[h>>>24]^e[k>>>16&255]^j[n>>>8&255]^l[g&255]^c[p++],t=d[k>>>24]^e[n>>>16&255]^j[g>>>8&255]^l[h&255]^c[p++],n=d[n>>>24]^e[g>>>16&255]^j[h>>>8&255]^l[k&255]^c[p++],g=q,h=s,k=t;q=(f[g>>>24]<<24|f[h>>>16&255]<<16|f[k>>>8&255]<<8|f[n&255])^c[p++];s=(f[h>>>24]<<24|f[k>>>16&255]<<16|f[n>>>8&255]<<8|f[g&255])^c[p++];t=(f[k>>>24]<<24|f[n>>>16&255]<<16|f[g>>>8&255]<<8|f[h&255])^c[p++];n=(f[n>>>24]<<24|f[g>>>16&255]<<16|f[h>>>8&255]<<8|f[k&255])^c[p++];a[b]=q;a[b+1]=s;a[b+2]=t;a[b+3]=n},keySize:8});u.AES=p._createHelper(d)})();var CryptoJSAesJson={'stringify':function(cipherParams){var j={ct:cipherParams.ciphertext.toString(CryptoJS.enc.Base64)}
if(cipherParams.iv)j.iv=cipherParams.iv.toString()
if(cipherParams.salt)j.s=cipherParams.salt.toString()
return JSON.stringify(j).replace(/\s/g,'')},'parse':function(jsonStr){var j=JSON.parse(jsonStr)
var cipherParams=CryptoJS.lib.CipherParams.create({ciphertext:CryptoJS.enc.Base64.parse(j.ct)})
if(j.iv)cipherParams.iv=CryptoJS.enc.Hex.parse(j.iv)
if(j.s)cipherParams.salt=CryptoJS.enc.Hex.parse(j.s)
return cipherParams}};table_rider_list=function(table_name){$(document).ready(function(){table[table_name]=$('#'+table_name).DataTable({"ajax":"","columns":[{data:"eff",className:'text-right text-nowrap',},{data:"name",render:ZP_DATA_get_NAME,className:'text-left text-nowrap athlete_col',},{data:"s",render:function(data,type,row){if(type!="display")
return data;str='';if(data)
str=data;return str},className:'text-right text-nowrap',},{data:"w",render:function(data,type,row){if(type!="display")
return data;if(!data)
return '';str=data+'<rsmall>kg</rsmall>';return str},className:'text-right text-nowrap padright24',"orderable":!0,},{data:"ftp",render:function(data,type,row){if(type!="display")
return data;if(!data)
return '';str=data+'<rsmall>w</rsmall>';return str},className:'text-right text-nowrap padright24',"orderable":!0,},{data:"age",render:ZP_DATA_get_AGE,className:'text-right text-nowrap padright24',"orderable":!0,},{data:"rank",render:ZP_DATA_get_RANKING_STANDING,className:'text-right text-nowrap padright24',"orderable":!0,visible:(ZP_VARS.RANKINGS_ACTIVE)?!0:!1,},{data:"elo",render:function(data,type,row){if(type!="display")
return data;str='';return str},className:'text-right text-nowrap',"orderable":!1,},],"paging":!0,"pageLength":50,"searching":!1,"deferRender":!0,"order":[[0,"desc"]],"autoWidth":!1,"lengthChange":!1,"info":!0,"ordering":!0,})})}
$('.no-special').bind('input', function() {
    var c = this.selectionStart,
        r = /[^a-z0-9]/gi,
        v = $(this).val();
    if(r.test(v)) {
        $(this).val(v.replace(r, ''));
        c--;
    }
    this.setSelectionRange(c, c);
});
$(document).ready(function() {
    var timer = null;
    $('#rider_list_filter_custom_loading').hide();
    $('#rider_list_filter_custom').keyup(function () {
        var query = $('#rider_list_filter_custom').val();
        if (query.length > 3) {
            $('#rider_list_filter_custom_loading').show();
            clearTimeout(timer);
            timer = setTimeout(searchRiders, 1000)
        }
    });

    function searchRiders() {
        ///api3.php?do=rider_list&search=chr
        var query = $('#rider_list_filter_custom').val();
        $('#rider_list_filter_custom').prop( "disabled", true );
        $("#rider_list_filter_custom").attr('disabled','disabled');
        table['rider_list'].ajax.url('/api3.php?do=rider_list&search=' + query);
        table['rider_list'].ajax.reload(function ( json ) {
            $('#rider_list_filter_custom').prop( "disabled", false );
            $("#rider_list_filter_custom").removeAttr('disabled');
            $('#rider_list_filter_custom_loading').hide();
        });
    }
});