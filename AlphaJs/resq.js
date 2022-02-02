Defer(function(){
$(function(){
var $option = {//جميع المدخلات يتم التعديل عليها من خلال هذه السلسلة
     element: '#request', //معرف الصفحة الثابتة
     scripturl: 'https://script.google.com/macros/s/AKfycbxPrkx7vFNU96TLBx9tCTQi1p-ttT5JaqKRhPCDh0_-2D3TN-1siaFiXEcKzmag882_uQ/exec',//رابط التطبيق
     termsurl: 'https://themes.itheric.com/p/terms-of-use.html',//رابط صفحة الشروط
     val: {//جميع النصوص في النموذج
		 "VAL_0": '',
		 "VAL_1": 'طلب منتج',
		 "VAL_2": 'تعديل الروابط',
		 "VAL_3": 'مراجعة الفواتير',
		 "VAL_4": 'إرسال',
		 "VAL_5": 'الإسم الكريم',
		 "VAL_6": 'البريد الإلكتروني',
		 "VAL_7": 'رقم إيصال الدفع',
		 "VAL_8": 'شروط الإستخدام',
		 "VAL_9": 'مهما كان المنتج الذي قمت بشرائه ستحصل على رقم فريد لعملية الشراء قم بإدخاله في خانة -رقم إيصال الدفع- لكي تستطيع إنشاء حساب له.',
		 "VAL_10": 'قم بإدخال البريد الذي سجلت به النسخة ورقم إيصال الدفع الخاص بها لكي تستطيع تعديل روابط المدونات الموجود عليها هذا المنتج.',
		 "VAL_11": 'في حال نسيت رقم إيصال الدفع لأحد المنتجات التي قمت بشرائها يمكنك إرسال فاتورة إلى بريدك تحوي أرقام جميع النسخ الخاصة بك',
		 "VAL_12": 'إسم المنتج',
		 "VAL_13": 'المبلغ المدفوع',
		 "VAL_14": 'رقم عملية الشراء',
		 "VAL_15": 'مفتاح التفعيل',
		 "VAL_16": 'فترة الدعم الفني',
		 "VAL_17": 'عدد الروابط المسموح بها',
		 "VAL_18": 'الإصدار الخاص بك',
		 "VAL_19": 'يحتاج تحديث للإصدار',
		 "VAL_20": 'نسخة محدثة',
		 "VAL_21": 'إذا كان الإصدار الخاص بك يحتاج تحديث..قم بتحميل آخر نسخة للمنتج من خلال الزر أدناه.',
		 "VAL_22": 'ضع في الخانات روابط المدونات التي تريد تشغيل عليها هذا المنتج..وفي حال أردت تشغيل فقط رابط واحد يمكنك ترك البقية فارغة دون مشاكل..ثم عند الإنتهاء إضغط على زر - التحديث - ليتم تأكيد البيانات.',
		 "VAL_23": 'تنزيل الإصدار',
		 "VAL_24": 'رابط المدونة...',
		 "VAL_25": 'تحديث',
		 "VAL_26": 'خاطيء',
		 "VAL_27": 'صحيح',
		 "VAL_28": 'خروج',
		 "VAL_29": 'حدث خطأ أثناء الإرسال!!'
	 }
    }

/*==========kingguard============*/
/*           وضيفة البناء            */
/*===============================*/
$.fn.kingguard = function(options, event, target) {

        var settings = $.extend({
            element: '',
            scripturl: '',
            termsurl: '',
            val: '',
            delay: 1000,
            onAccept: function(e) {}
        }, options);

	    var html = '';
	    var h1header = settings.val["VAL_1"]; //request
	    var submit = settings.val["VAL_4"];
	    var imgheader = '';
	    var notification = settings.val["VAL_9"];

		if(event == 'domain') {
		  h1header = settings.val["VAL_2"]; //domain
		  imgheader = '';
	      notification = settings.val["VAL_10"];
		}else if(event == 'receipt') {
		  h1header = settings.val["VAL_3"]; //receipt
		  imgheader = '';
	      notification = settings.val["VAL_11"];
		}

 //تعديل سلسلة الإستعلام في رابط المتصفح
 $.fn.kingguard.history(event, h1header);
 //فقط إذا كان هناك بيانات مطلوبة في التخزين المحلي
 if (typeof(Storage) !== "undefined" && null !== localStorage.getItem('request')) {
     var json = localStorage.getItem('request');
	   $.fn.kingguard.html(JSON.parse(json), true);
 }else {
html += '<div class="container-form">';
html += '<div class="sr-form materialize">';
html += '<div class="header-form">';
html += '<div class="hr-thumb">';
html += imgheader;
html += '</div>';
html += '<h3 class="radius-rq-30">'+h1header+'</h3>';
html += '</div>';
html += '<div class="btn-group">';
html += '<button class="alpha_button raised" id="request_btn" data-type="request"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg><span class="radius-rq-3">'+settings.val["VAL_1"]+'</span></button>';
html += '<button class="alpha_button raised" id="domain_btn" data-type="domain"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><g><rect fill="none" height="24" width="24"/><path d="M16.54,11L13,7.46l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L16.54,11z M11,7H2v2h9V7z M21,13.41L19.59,12L17,14.59 L14.41,12L13,13.41L15.59,16L13,18.59L14.41,20L17,17.41L19.59,20L21,18.59L18.41,16L21,13.41z M11,15H2v2h9V15z"/></g></svg><span class="radius-rq-3">'+settings.val["VAL_2"]+'</span></button>';
html += '<button class="alpha_button raised" id="receipt_btn" data-type="receipt"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"/></svg><span class="radius-rq-3">'+settings.val["VAL_3"]+'</span></button>';
html += '</div>';
html += '<div class="content-form" id="tab_'+event+'"><div class="account-window">';
if(notification) {
html += '<!-- notification html Start -->';
html += '<div class="Animat-fadeInUp alpha_alert alert_info alert_outline">';
html += '<p class="info">'+notification+'</p>';
html += '</div>';
html += '<!-- notification html End -->';
}
if(event == 'request') {
html += '<div class="Animat-fadeInUp input-field">';
html += '<label for="name"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>'+settings.val["VAL_5"]+':</label>';
html += '<input type="text" id="name" name="name"/>';
html += '</div>';
}
html += '<div class="Animat-fadeInUp input-field">';
html += '<label for="mail"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>'+settings.val["VAL_6"]+':';
html += '<span id="mail_message"></span>';
html += '</label>';
html += '<input type="email" id="mail" name="mail"/>';
html += '</div>';
if(event !== 'receipt') {
html += '<div class="Animat-fadeInUp input-field">';
html += '<label for="purchase"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"/></svg>'+settings.val["VAL_7"]+':</label>';
html += '<input type="text" id="purchase" name="purchase"/>';
html += '</div>';
}
if(event == 'request') {
html += '<div class="input-field">';
html += '<input type="checkbox" id="terms" value="true" checked="checked"/>';
html += '<a class="terms-item" href="'+settings.termsurl+'" target="_blank">'+settings.val["VAL_8"]+'</a>';
html += '</div>';
}
html += '<button class="btn-submit shadow-rq-kit radius-rq-3" id="btn_submit" data-submit="'+event+'">'+submit+'</button>';
html += '</div></div><div class="area-message"></div></div>';
html += '</div>';

     $(settings.element).html(html);
     setTimeout(function() {
        $.fn.kingguard.submit(false);
     }, settings.delay);
 }
};
/*==========submit============*/
/*        غرفة الإرسال         */
/*============================*/
$.fn.kingguard.submit = function(json) {
    var name_scs = [];
    //تنضيف مربع الإدخال
    $("body").on('click keyup', 'input', function(e) {
                        var self = $(this);
                        var val = $(this).val();
                        var type = $(this).attr('type');
                        var _mail_input = $('input[name="mail"]');
                        var _mail_message = $('#mail_message');
                        var _str_m = {};
                            name_scs = [];
						if(self.is('.wrg')) {
                          self.removeClass('wrg');
						}
                        //ضبط مربع البريد قبل الإرسال
						if(_mail_input.val() && _mail_input.length > 0 && _mail_message.length > 0) {
                          var _validate = $.getvalidateEmail(_mail_input.val());
                          var _validateTXT = _validate.value;
                              _str_m = {name: 'mail', exc: _validate.selector, message: _validate.value};
                              _mail_message.html(_validateTXT);
                        }
                        name_scs.push(_str_m);
    });

   //زر وضيفة مسح بيانات التخزين المحلي
   $('[data-clear]').on('click', function(e) {
      var name = $(this).attr('data-clear');
      localStorage.clear(name);
      location.reload(true);
	 return false;
   });

   //زر وضيفة تعديل راوبط المدونات التي يشتغل عليها المنتج
    $('[data-product]').on('click', function(e) {
      var product = $(this).attr('data-product');
      var bloge= '';
      var j = json.records;
      var url = $option.scripturl+"?";
       $("input.bloge").not(":disabled").each(function() {
          var v = $(this).val() || null;
          var i = $(this).attr('data-input');
            if(product === i) {
               bloge += "|"+v;
            }
       });
           url += "Type=domain";
           url += "&Mail="+j.mail;
           url += "&Purchase="+j.result.purchase;
	       url += "&Bloge="+bloge;
		   url += "&Product="+product;
       if(url) {
		$.fn.kingguard.login(url, false, e);
       }
      return false;
    });

	//زر إرسال البيانات  [طلب منتج], [تعديل الروابط]
    $('[data-submit]').on('click', function(e) {
                    	var _type = $(this).attr('data-submit');
                    	var _name = $("#name").val();
                    	var _mail = $("#mail").val();
                    	var _purchase = $("#purchase").val();
                    	var terms = $("#terms");
                    	var _terms = terms.is(":checked") ? !0 : !1;
                    	var url = $option.scripturl+"?";
                    	    url += "Type="+_type;
                    	    if(_name) {url += "&Name="+_name;}
                    	    if(_mail) {url += "&Mail="+_mail;}
                    	    if(_purchase) {url += "&Purchase="+_purchase;}
                    	    if(_terms) {url += "&Terms="+_terms;}
                        //وضيفة قياسية لإجبار المستخدم على ملأ البيانات المطلوبة
                    	$($option.element).find("input").not(":disabled").each(function() {
                           var self = $(this); self.data('wrg', false);
                           //تفقد مربعات الإدخال الضرورية
                           $.each(name_scs , function(index, val) {
                              var inp = $('input[name="'+val.name+'"]');
                              var mes = $('#'+val.name+'_message');
                             !1 === val.exc ? (mes.html(val.message), inp.data('wrg', true)) : (mes.html(''), inp.data('wrg', false));
                           });
						   //تفقد معك الموافقة على الشروط
						   !0 === _terms ? terms.val(!0) : terms.val('');
                    	  if(self.val() && self.length > 0 && self.data('wrg') == false) {
                    	     self.removeClass('wrg');
                    	  }else {
                    	     self.addClass('wrg');
						     url = false;
                    	  }
                    	});
                    	if(url) {
					      $.fn.kingguard.login(url, true, e);
                    	}
    });
};
/*===========login============*/
/*        إستـدعاء التطبيق    */
/*============================*/
$.fn.kingguard.login = function(e, event, target) {
 jQuery.ajax({
     timeout: 10000,
     url: e+"&action=requestin",
     method: "GET",
     dataType: "jsonp",
     async: true,
     beforeSend: function() {
       if(target) $(target.target).addClass('btn-loading').attr('disabled','disabled');
     },
     success:function(json){
        $.fn.kingguard.html(json, event, target);
     },
     error:function(e, jqxhr, exception){
        $.fn.kingguard.message('<p class="err"><i class="fa fa-ban"></i>'+$option.val["VAL_29"]+'</p>', true, target);
     }
 });
};
/*============html============*/
/*   إستدعــاء نموذج الدخول   */
/*============================*/
$.fn.kingguard.html = function(json, event, target) {
  var url =  $option.scripturl+"?";
  var flag = 3;
  var html = '',version='';
  var j = json.records,
      name_avatar = j.name,
      mail_avatar = j.mail,
      JStype = j.type,
      JSsession = j.session,
      JSresult = j.result,
      JSstatus = j.status,
      JSmessage = j.message;
  var history_type = $.urlParam('type'),
      history_name = name_avatar;

    //رجوع / إذا لم يجد ترخيص
    //أو خطأ في الخادم 502 يتطلب المحاولة بعد 30 ثانية
	if(JSstatus === false || JSstatus === 502){
     $.fn.kingguard.message(JSmessage, true, target);
	 return false;
    }

    if (typeof(Storage) !== "undefined" && JSstatus) {
       localStorage.setItem('request', JSON.stringify(json));
	}

	       html += '<div class="container-form">';
	       html += '<div class="sr-form materialize shadow-rq-kit">';
	       //header
	       html += '<div class="header-form">';
	       html += '<div class="hr-topbar">';
	       html += '<button class="btn-clear" id="clear_btn" data-clear="request" title="'+$option.val["VAL_28"]+'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--color-key)" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></button>';
	       html += '</div>';
	       html += '<div class="hr-thumb"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--color-key)" width="80px" height="80px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg></div>';
	       html += '<h3 class="hr-name radius-rq-30">'+name_avatar+'</h3>';
	       html += '</div>';
		   //form Purchases start
	       html += '<div class="content-form">';
	       html += '<div class="accordion-window">';
                //area statement
	            html += '<ul class="statement">';
	            html += '<li><span class="sttxt">'+$option.val["VAL_12"]+':</span><span class="stvar">' + JSresult.name + '</span></li>';
	            html += '<li><span class="sttxt">'+$option.val["VAL_13"]+':</span><span class="stvar">$' + JSresult.pay + '</span></li>';
	            html += '<li><span class="sttxt">'+$option.val["VAL_14"]+':</span><span class="stvar">' + JSresult.purchase + '</span></li>';
	            html += '<li><span class="sttxt">'+$option.val["VAL_15"]+':</span><span class="stvar">' + JSresult.key + '</span></li>';
	            html += '<li><span class="sttxt">'+$option.val["VAL_16"]+':</span><span class="stvar">' + JSresult.expirday + '</span></li>';
	            html += '<li><span class="sttxt">'+$option.val["VAL_17"]+':</span><span class="stvar">' + JSresult.expirlink + '</span></li>';
	            html += '<li><span class="sttxt">'+$option.val["VAL_18"]+':</span><span class="stvar">' + JSresult.version.ta + '</span>';
		        if(JSresult.version.ta !== JSresult.version.actuelle){
	               html += $option.val["VAL_19"]+' - <span class="stvar">'+JSresult.version.actuelle+'</span>';
		        }else{
	               html += $option.val["VAL_20"];
		        }
	            html += '</li>';
	            html += '</ul>';
			    //area download
	            html += '<ul class="download">';
                html += '<li><p>'+$option.val["VAL_21"]+'</p></li>';
	            html += '<li><a class="btn-download shadow-rq-kit radius-rq-3" href="' + JSresult.download + '" title=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--color-key)" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></svg>'+$option.val["VAL_23"]+' v'+JSresult.version.actuelle+'</a></li>';
	            html += '</ul>';
			   //area domain
		        if(JSresult.expirlink){
	            html += '<ul class="domain">';
                html += '<li><p>'+$option.val["VAL_22"]+'</p></li>';
                for (var m = 0; m < JSresult.expirlink; m++) {
                 var uri = '';
                 if(JSresult.blog){
                    uri = JSresult.blog[m];
                 }
	            html += '<li><input type="url" class="bloge sr-input" placeholder="'+$option.val["VAL_24"]+'" data-input="'+JSresult.name+'" value="'+uri+'"/></li>';
	            }
	            html += '<li><button class="btn-submit shadow-rq-kit radius-rq-3" data-product="'+JSresult.name+'">'+$option.val["VAL_25"]+'</button></li>';
	            html += '</ul>';
	            }
	       html += '</div>';
		   html += '<div class="area-message"></div>';
	       html += '</div>';
	       html += '</div>';
		   html += '</div>';

	  if(event === true){
	    $($option.element).html(html);
	    $.fn.kingguard.submit(json);
        $.fn.kingguard.history(JStype, history_name);
      }
      //فقط عند الضغط على الزر المطلوب فعليا
      if(target) {
        //إستدعاء وضيفة إدراج رسائل التنبيه
        $.fn.kingguard.message(JSmessage, true, target);
      }
};
/*=====validate an email address======*/
//وضيفة تفقد تنسيق البريد الإلكتروني
$.getvalidateEmail = function(email) {
  var data = {};
  var val = '';
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var test = re.test(String(email).toLowerCase());
     if(!test) {
      val = "VAL_26";
     }else {
      val = "VAL_27";
     }
  return data = {"value": $option.val[val], "selector": test};
};
/*==========url Param============*/
//سلسلة الاستعلام / الحصول على قيم معلمات عنوان URL
$.urlParam = function (name) {
    var results = new RegExp('[?&]' + name + '=([^&#]*)').exec(window.location.search);
    return (results !== null) ? results[1] || 0 : false;
};
/*==========message============*/
//إسترجاع رسائل التنبيهات
$.fn.kingguard.message = function(e, event, target) {
    var message = "";
     if(e) {
	  message = e;
       setTimeout(function() {
        if(event) $(".area-message p").fadeOut(300);
       }, 5000);
     }
     if(target) {
       $(target.target).removeClass('btn-loading').removeAttr('disabled');
     }
     $(".area-message").html(message);
};
/*==========history============*/
//وضيفة إضافة (دفع) "حالة" جديدة إلى سجل المتصفح ،
//بحيث يتمكن المستخدم في المستقبل من العودة إلى هذه الحالة التي توجد بها صفحة الويب الآن
//بالإضافة إلى تغيير عنوان صفحة المتصفح حسب النموذج المطلوب
$.fn.kingguard.history = function(e, t) {
  var $stateObj = { foo: "account" };
   if(t && t !== null) {
	$('head').find('title').text(t);
   }
   history.pushState($stateObj, "page 2", "/p/request.html?type="+e);
 return false;
};
/*==========run============*/
//البدأ في تنفيذ التعليمات البرمجية عند تحميل الصفحة أو عند التبديل بين النماذج
  var $type = $.urlParam('type') || 'request';
      $.fn.kingguard($option, $type);
 $(document).on('click', '[data-type]', function() {
  var $val = $(this).attr('data-type');
             $(this).addClass('btn-loading');
     setTimeout(function(){
       $.fn.kingguard($option , $val);
     }, 300);
 });
});
},400);
