function fnCheckProductType(e){var t=e.value;$("#producttypeotherdiv").hide(),"autre"==t?($("#nb_words").removeAttr("min").removeAttr("max"),$("#producttypeotherdiv").show()):"article_de_blog"==t?($("#nb_words").attr("min","200"),$("#nb_words").attr("max","500")):"news"==t?($("#nb_words").attr("min","50"),$("#nb_words").attr("max","200")):"descriptif_produit"==t?($("#nb_words").attr("min","40"),$("#nb_words").attr("max","150")):"guide"==t?($("#nb_words").attr("min","500"),$("#nb_words").attr("max","1500")):"wordings"==t?($("#nb_words").attr("min","1"),$("#nb_words").attr("max","1")):$("#nb_words").removeAttr("min").removeAttr("max")}function fnOtherProduct(e){otherid=e.value,othertext=$("#otherproducttype_chosen a span").text(),"0"==otherid?($("#otherproductnew").removeClass("hidden"),$("#producttypeother").val("")):($("#otherproductnew").addClass("hidden"),$("#producttypeother").val(othertext))}function fnEditorialtotech(e){var t=e.value;1==t?($("#language").removeClass("hidden"),$("#language_chosen").removeClass("hidden"),$(".languages_part").removeClass("hidden"),$(".edito_product").removeClass("hidden"),$(".techseo_product").addClass("hidden"),$("#tech_product").addClass("hidden"),$("#tech_mission_details_first").addClass("hidden"),$("#tech_title").addClass("hidden"),$("#nb_words").removeClass("hidden"),$("#oneshot_chosen").removeClass("hidden"),$(".tech_working").addClass("hidden"),$("#working_days").addClass("hidden")):(3==t?($(".languages_part").addClass("hidden"),$("#language_chosen").addClass("hidden"),$("#language").addClass("hidden"),$("#languagedest").addClass("hidden"),techtitlelist("credit"),$("#to_perform").parent("div.form-group").addClass("hidden"),$("#prod_mission_selected").parent("div.form-group").addClass("hidden"),$("#working_days").addClass("hidden"),$("#mission_duration_details").closest(".form-group").removeClass("hidden")):(4==t?($("#cre_product").chosen({width:"100%"}),$("#cre_product").chosen({disable_search_threshold:10,display_disabled_options:!1}),$("#cre_product").val(""),$("#cre_product_chosen").removeClass("hidden"),$("#tech_product").addClass("hidden"),$("#tech_product_chosen").addClass("hidden"),$("#cre_product").trigger("chosen:updated"),"superadmin"==$("#volume").attr("data-usertype")?($("#mission_length").attr("readonly",!1),$("#duration_dont_know").attr("readonly",!1)):($("#mission_length").attr("readonly",!0),$("#duration_dont_know").attr("readonly",!0)),$("#tech_oneshot option[value='no']").attr("disabled",!0),$("#tech_oneshot").trigger("chosen:updated")):($("#cre_product").addClass("hidden"),$("#cre_product_chosen").addClass("hidden"),$("#tech_product").removeClass("hidden"),$("#tech_product_chosen").removeClass("hidden"),$("#tech_product").val(""),$("#tech_product option").removeAttr("disabled"),$("#tech_product option[value='credit']").attr("disabled",!0),$("#tech_product").trigger("chosen:updated"),$("#tech_oneshot option[value='no']").attr("disabled",!1),$("#tech_oneshot").trigger("chosen:updated")),$("#tech_title").val(""),$("#tech_title").trigger("chosen:updated"),$("#language").parent("div").removeClass("col-md-3").addClass("col-md-6"),$("#language_chosen").removeClass("hidden"),$(".languages_part").removeClass("hidden"),$("#language").removeClass("hidden"),$("#to_perform").parent("div.form-group").removeClass("hidden"),$("#prod_mission_selected").parent("div.form-group").removeClass("hidden")),$(".edito_product").addClass("hidden"),$("#product").addClass("hidden"),$(".techseo_product").removeClass("hidden"),$("#tech_mission_details_first").removeClass("hidden"),$("#languagedest_chosen").addClass("hidden"),$("#producttype").addClass("hidden"),$("#nb_words").addClass("hidden"),$("#oneshot_chosen").addClass("hidden"))}function techtitlelist(e,t){var o="",a=e,d=$("#team").val();$("#tech_product").html();$(".seo_product_details").addClass("hidden"),$("#seo_product").addClass("hidden"),$(".tech_productdetail").removeClass("hidden"),$("#tech_title").val(""),t&&(o="&typeid="+t);var s="/quote-new/tech-title-select?tech_type="+a+o;$.post(s,function(e){var t=$("#tech_title");3==d?($("#tech_product").val("credit"),$("#tech_product option").attr("disabled",!0),$("#tech_product option[value='credit']").removeAttr("disabled"),$("#tech_product").trigger("chosen:updated")):($("#tech_product option").removeAttr("disabled"),$("#tech_product option[value='credit']").attr("disabled",!0),$("#tech_product").trigger("chosen:updated")),t.empty().html(e),$("#tech_title").trigger("chosen:updated")}),"integration"!=a&&"edito"!=a&&"credit"!=a?($(".tech_working").removeClass("hidden"),$("#working_days").removeClass("hidden")):($(".tech_working").addClass("hidden"),$("#working_days").addClass("hidden"))}function techtitleDetails(e){techval=e;var t="/quote-new/tech-delivery-mission?title_id="+techval;$.post(t,function(e){var t=e.split("-");"integration"==$("#tech_product").val()||1==$("#team").val()||3==$("#team").val()?""==$("#mission_length").val()&&$("#mission_length").val(t[0].trim()):4==$("#team").val()?(""==$("#volume").val()&&$("#volume").val(t[4].trim()),""!=$("#mission_length").val()&&0!=$("#mission_length").val()||$("#mission_length").val(t[0].trim()),$("#mission_length").attr("data-days",t[0].trim()),$("#working_days").val(t[3].trim()),$(".tech_working").addClass("hidden"),$("#working_days").attr("data-config",t[4].trim()),$("#working_days").attr("data-configwork",t[3].trim())):(""==$("#working_days").val()?$("#working_days").val(t[0].trim()):$("#working_days").val($("#working_days").val()),$("#mission_length").attr("min",t[0].trim()),$("#working_days").attr("data-config",t[0].trim())),techoneshotVolume("change")})}function fnoneshotdetails(e){var t=$("#team").val(),o=$("#product").val(),a=$("#tech_product").val();if(2!=t&&3!=t&&4!=t&&"editorical"!=o||"translation"==o||"redaction"==o)"no"==e?($("#tempo_details").css({display:"block"}),$("#volume_max").removeClass("hidden"),$("#tempo_length").removeClass("hidden")):($("#tempo_details").css({display:"none"}),$("#volume_max").addClass("hidden"),$("#tempo_length").addClass("hidden"));else if("no"==e){if($("#tech_tempo_details").css({display:"block"}),"integration"!=a&&"editorical"!=o){var d=$("#volume").val();$("#tech_volume_max").attr("max",d)}$("#tech_volume_max").removeClass("hidden"),$("#tech_tempo_length").removeClass("hidden"),"editorical"!=o&&"integration"!=a&&"credit"!=a?($("#mission_duration_details").closest(".form-group").addClass("hidden"),$("#mission_length").addClass("hidden")):($("#mission_duration_details").closest(".form-group").removeClass("hidden"),$("#mission_length").removeClass("hidden")),$(".oneshot-no").removeClass("hidden")}else $("#tech_tempo_details").css({display:"none"}),$("#tech_volume_max").addClass("hidden"),$("#tech_tempo_length").addClass("hidden"),$("#mission_length").removeClass("hidden"),$("#mission_duration_details").closest(".form-group").removeClass("hidden")}function selectProdMission(e){"Yes"==e?$("#prodMission_details").removeClass("hidden"):$("#prodMission_details").addClass("hidden")}function calculatedDurationonConfig(){volume=$("#volume").val(),nbwords=$("#nb_words").val(),calculatedVal=nbwords*volume,prodval=$("#producttype option:selected").val(),configprod=$("#producttype option:selected").attr("configwords"),max_writer=$("#nb_words").attr("rel"),configureval=max_writer*configprod,durationVal=Math.ceil(calculatedVal/configureval),restrict_min_duration=Math.ceil(calculatedVal/(10*configprod)),restrict_min_duration<1&&(restrict_min_duration=1),"autre"==prodval?$("#mission_length").attr("min","1"):$("#mission_length").attr("min",restrict_min_duration),durationVal<=0&&(durationVal=1),"autre"!=prodval&&($("#mission_length").val(durationVal),$("#mission_length").attr("rel",durationVal))}function oneshotVolume(e){return $(".oneshotVolume").each(function(){var t=$("#oneshot").val();if("no"==t){var o=$("#nb_words").val();if(duration_missionval=$("#mission_length").val(),totalvolumeval=$("#volume").val(),volumeMax=$("#volume_max").val(),tempotype=$("#tempo_type").val(),tempotypeconfig=$("#tempo_type option:selected").attr("tempoconfig"),configval=tempotypeconfig.split("-"),configprod=$("#producttype option:selected").attr("configwords"),deleveryvolumeoption=$("#delivery_volume_option").val(),tempoLength=$("#tempo_length").val(),tempoLengthoption=$("#tempo_length_option").val(),durationknow=$("#duration_dont_know").is(":checked"),$(".alert-danger").remove(),$("#newMissionStep2Btn").removeAttr("disabled"),"days"==tempoLengthoption?tempo_callenth=tempoLength:"week"==tempoLengthoption?tempo_callenth=7*tempoLength:"month"==tempoLengthoption?tempo_callenth=30*tempoLength:"year"==tempoLengthoption&&(tempo_callenth=365*tempoLength),calculatedtval=parseInt(configval[0])/parseInt(configval[1]),configcal=calculatedtval*tempo_callenth,tempocalculated=o*volumeMax,0==durationknow?caltotval=Math.round(duration_missionval/tempo_callenth*volumeMax):caltotval=volumeMax,duration_missionval=Math.round(totalvolumeval*tempo_callenth/volumeMax),enteredVal=o*totalvolumeval,restrict_min_duration=Math.ceil(enteredVal/(10*configprod)),restrict_min_duration<1&&(restrict_min_duration=1),$("#mission_length").attr("min",restrict_min_duration),""!=volumeMax&&""!=deleveryvolumeoption){if("change"==e&&$.isNumeric(duration_missionval)&&0!=duration_missionval&&($("#mission_length").val(duration_missionval),totalvolumeval=caltotval),caltotval!=totalvolumeval&&$.isNumeric(caltotval))return $("#delivery_volume_option").closest(".form-group").after("<div class='alert-danger col-md-7 col-md-offset-3' style='padding:0 5px;'>Le tempo indiqu&#233; ne correspond pas au volume et &#224; la  dur&#233;e de la mission</div>"),volume_error=!1,$("#newMissionStep2Btn").attr("disabled","disable"),!1;if(configcal<tempocalculated)return $("#delivery_volume_option").closest(".form-group").after("<div class='alert-danger col-md-7 col-md-offset-3' style='padding:0 5px;'> Massive volume for only one writer ("+configval[0]+" words "+configval[1]+" days) </div>"),$("#newMissionStep2Btn").attr("disabled","disable"),!1;$("#newMissionStep2Btn").removeAttr("disabled"),volume_error=!0}}}),!0}function techoneshotVolume(e){var t=$("#tech_product").val(),o=$("#product").val(),a=$("#tech_oneshot").val();if("no"==a)if(duration_missionval=$("#mission_length").val(),totalvolumeval=$("#volume").val(),volumeMax=parseInt($("#tech_volume_max").val()),tempotype=$("#tech_tempo_type").val(),deleveryvolumeoption=$("#tech_delivery_volume_option").val(),tempoLength=parseInt($("#tech_tempo_length").val()),tempoLengthoption=$("#tech_tempo_length_option").val(),$(".alert-danger").remove(),"days"==tempoLengthoption?tempo_callenth=tempoLength:"week"==tempoLengthoption?tempo_callenth=7*tempoLength:"month"==tempoLengthoption?tempo_callenth=30*tempoLength:"year"==tempoLengthoption&&(tempo_callenth=365*tempoLength),("integration"==t||"credit"==t)&&(2==$("#team").val()||3==$("#team").val())||"editorical"==o&&""==t&&1==$("#team").val()){if(caltotval=Math.round(duration_missionval/tempo_callenth*volumeMax),duration_missionval=Math.round(totalvolumeval*tempo_callenth/volumeMax),"change"==e&&$.isNumeric(caltotval)&&0!=caltotval&&($("#volume").val(caltotval),totalvolumeval=$("#volume").val()),caltotval!=totalvolumeval&&$.isNumeric(caltotval))return $("#tech_delivery_volume_option").closest(".form-group").after("<div class='alert-danger col-md-7 col-md-offset-3' style='padding:0 5px;'>Le tempo indiqu&#233; ne correspond pas au volume et &#224; la  dur&#233;e de la mission</div>"),volume_error=!1,!1;volume_error=!0}else $("#mission_length").addClass("hidden"),duration_missionval=Math.round(totalvolumeval*(tempo_callenth/volumeMax)),$("#mission_length").val(duration_missionval);return!0}$(document).ready(function(){$("body").on("hidden.bs.modal",".modal",function(){$(this).removeData("bs.modal"),$("body").attr("id",""),$(".modal-backdrop").hide()}),$("#newMissionStep1").addClass("show"),$(".modalFullStep1").addClass("modalFullStepActive"),$("#newMissionStep1Btn").click(function(){var e=$("create_quote_mission"),t=(e.data("validator"),$(this).closest("div#newMissionStep1")),o=t.find(":input");if(o.valid()){var a=$("#language").val(),d=$("#languagedest").val();if(d==a&&3!=$("#team").val()&&2!=$("#team").val())return $("#languagedest-error").remove(),$("#languagedest").closest(".form-group").addClass("has-error error"),$(".languages_part").append('<div id="languagedest-error" class="col-md-offset-4 col-md-6 has-error error">Please select different language</div>'),!1;$("#languagedest-error").remove(),2!=$("#team").val()&&3!=$("#team").val()&&4!=$("#team").val()&&"editorical"!=$("#product").val()||($("#product_text").text($("#tech_product_chosen a span").text()),$("#product_type_text").text($("#tech_title_chosen a span").text()),$("#language_text").closest(".material-icons").addClass("hidden"),$("#languagedes_text").addClass("hidden"),"no"==$("#tech_oneshot").val()?($(".oneshot-no").removeClass("hidden"),$("#volume_max_text").text($("#tech_volume_max").val()),$("#tempo_type_text").text($("#tech_tempo_type_chosen a span").text()),$("#delivery_tempo_text").text($("#tech_delivery_volume_option_chosen a span").text()),$("#tempo_length_text").text($("#tech_tempo_length").val()),$("#tempolenght_option_text").text($("#tech_tempo_length_option_chosen a span").text())):($(".oneshot-no").addClass("hidden"),""==$("#volume").attr("rel")&&$("#volume").val(1)),3==$("#team").val()?($(".tech_working").addClass("hidden"),$("#working_days").addClass("hidden"),$("#to_perform").closest("div.form-group").addClass("hidden"),$("#prod_mission_selected").closest("div.form-group").addClass("hidden")):(4==$("#team").val()&&$(".tech_working").addClass("hidden"),"Yes"==$("#prod_mission_selected").val()&&$("#prodMission_details").removeClass("hidden"),$("#to_perform").closest("div.form-group").removeClass("hidden"),$("#prod_mission_selected").closest("div.form-group").removeClass("hidden")),$("#nbwords_text").closest("td").addClass("hidden")),$("#newMissionStep1").removeClass("show"),$("#newMissionStep2").addClass("show animated bounceInRight"),$(".modalFullStep2").addClass("modalFullStepActive"),$(".modalFullStep1").removeClass("modalFullStepActive"),$(".modalFullStep3").removeClass("modalFullStepActive")}}),$("#newMissionStep2Btn").click(function(){var e=$("create_quote_mission"),t=(e.data("validator"),$(this).closest("div#newMissionStep2")),o=t.find(":input");o.valid()&&("disabled"==$(this).attr("disabled")?($("#newMissionStep1").removeClass("show"),$("#newMissionStep2").addClass("show animated bounceInRight"),$(".modalFullStep3").removeClass("modalFullStepActive"),$(".modalFullStep2").addClass("modalFullStepActive"),$(".modalFullStep1").removeClass("modalFullStepActive")):($("#newMissionStep2").removeClass("show"),$("#newMissionStep3").addClass("show animated bounceInRight"),$(".modalFullStep3").addClass("modalFullStepActive"),$(".modalFullStep2").removeClass("modalFullStepActive"),$(".modalFullStep1").removeClass("modalFullStepActive")),$("#mission_name_text").text($("#mission_name").val()),$("#language_text").text($("#language_chosen a span").text()),"Yes"==$("#duration_dont_know").val()?$("#mission_length_text").text("Unknown"):$("#mission_length_text").text($("#mission_length").val()),$("#volume_text").text($("#volume").val()),1==$("#team").val()?($("#editorical_text").text("Editorial"),"autre"==$("#producttype").val()?0==$("#otherproducttype").val()?$("#product_type_text").text($("#producttypeother").val()):$("#product_type_text").text($("#otherproducttype_chosen a span").text()):$("#product_type_text").text($("#producttype_chosen a span").text()),$("#product_text").text($("#product_chosen a span").text()),"translation"==$("#product").val()?($("#language_text").closest(".material-icons").removeClass("hidden"),$("#languagedes_text").removeClass("hidden").text($("#languagedest_chosen a span").text()),$("#nbwords_text").text($("#nb_words").val()),"no"==$("#oneshot").val()?($(".oneshot-no").removeClass("hidden"),$("#volume_max_text").text($("#volume_max").val()),$("#tempo_type_text").text($("#tempo_type_chosen a span").text()),$("#delivery_tempo_text").text($("#delivery_volume_option_chosen a span").text()),$("#tempo_length_text").text($("#tempo_length").val()),$("#tempolenght_option_text").text($("#tempo_length_option_chosen a span").text())):$(".oneshot-no").addClass("hidden")):"editorical"==$("#product").val()?($("#product_type_text").text($("#tech_title_chosen a span").text()),$("#language_text").closest(".material-icons").addClass("hidden"),$("#languagedes_text").addClass("hidden"),$("#editorical_text").text("Service"),"no"==$("#tech_oneshot").val()?($(".oneshot-no").removeClass("hidden"),$("#volume_max_text").text($("#tech_volume_max").val()),$("#tempo_type_text").text($("#tech_tempo_type_chosen a span").text()),$("#delivery_tempo_text").text($("#tech_delivery_volume_option_chosen a span").text()),$("#tempo_length_text").text($("#tech_tempo_length").val()),$("#tempolenght_option_text").text($("#tech_tempo_length_option_chosen a span").text())):$(".oneshot-no").addClass("hidden")):($("#language_text").closest(".material-icons").addClass("hidden"),$("#languagedes_text").addClass("hidden"),$("#nbwords_text").text($("#nb_words").val()),"no"==$("#oneshot").val()?($(".oneshot-no").removeClass("hidden"),$("#volume_max_text").text($("#volume_max").val()),$("#tempo_type_text").text($("#tempo_type_chosen a span").text()),$("#delivery_tempo_text").text($("#delivery_volume_option_chosen a span").text()),$("#tempo_length_text").text($("#tempo_length").val()),$("#tempolenght_option_text").text($("#tempo_length_option_chosen a span").text())):$(".oneshot-no").addClass("hidden"))):(4==$("#team").val()?($("#product_text").text($("#cre_product_chosen a span").text()),$("#editorical_text").text("Créa")):($("#product_text").text($("#tech_product_chosen a span").text()),$("#editorical_text").text("Service")),$("#product_type_text").text($("#tech_title_chosen a span").text()),$("#language_text").closest(".material-icons").addClass("hidden"),$("#languagedes_text").addClass("hidden"),"no"==$("#tech_oneshot").val()?($(".oneshot-no").removeClass("hidden"),$("#volume_max_text").text($("#tech_volume_max").val()),$("#tempo_type_text").text($("#tech_tempo_type_chosen a span").text()),$("#delivery_tempo_text").text($("#tech_delivery_volume_option_chosen a span").text()),$("#tempo_length_text").text($("#tech_tempo_length").val()),$("#tempolenght_option_text").text($("#tech_tempo_length_option_chosen a span").text())):$(".oneshot-no").addClass("hidden"),"Yes"==$("#prod_mission_selected").val()&&$("#prodMission_details").removeClass("hidden")))}),$("#newMissionStep2BtnPrev").click(function(){$("#newMissionStep2").removeClass("show"),$("#newMissionStep1").addClass("show"),$(".modalFullStep1").addClass("modalFullStepActive"),$(".modalFullStep2").removeClass("modalFullStepActive"),$(".modalFullStep3").removeClass("modalFullStepActive")}),$("#newMissionStep3BtnPrev").click(function(){$("#newMissionStep3").removeClass("show"),$("#newMissionStep2").addClass("show"),$(".modalFullStep2").addClass("modalFullStepActive"),$(".modalFullStep3").removeClass("modalFullStepActive"),$(".modalFullStep1").removeClass("modalFullStepActive")}),$("#language").chosen({allow_single_deselect:!1,search_contains:!0}),$("#product").on("change",function(){var e=$(this).val();"translation"==e||"redaction"==e?("translation"==e?($("#language").parent("div").removeClass("col-md-6").addClass("col-md-3"),$("#languagedest").removeClass("hidden"),$("#languagedest").chosen({allow_single_deselect:!1,search_contains:!0}),$("#languagedest_chosen").removeClass("hidden"),$(".all_language").removeClass("hidden")):($("#language").parent("div").removeClass("col-md-3").addClass("col-md-6"),$("#languagedest_chosen").addClass("hidden"),$(".all_language").addClass("hidden"),$("#languagedest").addClass("hidden")),$("#producttype").closest(".edito_product").removeClass("hidden"),$("#tech_title").closest(".techseo_product").addClass("hidden"),$("#nb_words").closest(".edito_product").removeClass("hidden"),$("#tech_oneshot").closest(".techseo_product").addClass("hidden"),$("#tech_mission_details_first").addClass("hidden"),$("#mission_duration_details").closest(".form-group").removeClass("hidden"),$("#mission_length").removeClass("hidden"),$("#nb_words").removeClass("hidden"),$("#producttype").removeClass("hidden"),$("#editorical_text").text("Editorial"),$(".tech_working").addClass("hidden"),$("#working_days").addClass("hidden"),$("#tech_mission_details_first").addClass("hidden"),$("#tech_oneshot_chosen").addClass("hidden")):($("#languagedest_chosen").addClass("hidden"),$("#producttype").closest(".edito_product").addClass("hidden"),$(".edito_product").closest("#product").addClass("hidden"),$("#oneshot").addClass("hidden"),$("#oneshot_chosen").addClass("hidden"),$("#tech_oneshot_chosen").removeClass("hidden"),$("#tech_oneshot").closest(".techseo_product").removeClass("hidden"),$(".techseo_product").closest("#product").removeClass("hidden"),$("#nb_words").closest(".edito_product").addClass("hidden"),$("#tech_title").closest(".techseo_product").removeClass("hidden"),$("#tech_mission_details_first").removeClass("hidden"),$("#nb_words").addClass("hidden"),$("#producttype").addClass("hidden"),$("#editorical_text").text("Service"),"Yes"==$("#prod_mission_selected").val()&&$("#prodMission_details").removeClass("hidden"),techtitlelist("edito",""),$(".tech_working").addClass("hidden"),$("#working_days").addClass("hidden"))}),$("#duration_dont_know").on("change",function(){if(1==$(this).is(":checked"))$("#mission_length").attr("disabled","disabled"),$("#mission_length").val("0"),$("#mission_length").attr("min","0"),$("#duration_dont_know").val("yes");else{$("#mission_length").removeAttr("disabled"),$("#duration_dont_know").val("");var e=$("#team").val();$("#mission_length").attr("min","1");var t=$("#product").val();2!=e&&"editorical"!=t||"translation"==t||"redaction"==t||techoneshotVolume("change")}}),$("#volume").on("change keyup keypress",function(){var e=$("#team").val(),t=$("#oneshot").val(),o=$("#tech_oneshot").val(),a=$("#tech_product").val();if(1==e&&"yes"==t&&calculatedDurationonConfig(),"integration"!=a&&"1"!=e){var d=this.value,s=$("#working_days").attr("data-config");if(4==e){var n=Math.ceil(d/s),l=$("#mission_length").attr("data-days"),i=n*l;$("#mission_length").val(i);var r=$("#working_days").attr("data-configwork"),c=r*n;$("#working_days").val(c)}else{var _=d*s;$("#mission_length").attr("min",_),$("#working_days").val(_),"no"==o&&$("#tech_volume_max").attr("max",d)}}}),$("#working_days").on("change keyup keypress",function(){var e=this.value;$("#mission_length").attr("min",e)}),$("#mission_length").on("change keyup keypress",function(){"yes"==$("#oneshot option:selected").val()&&($(".alert-danger").remove(),$("#newMissionStep2Btn").removeAttr("disabled"))}),$("body").on("change keyup keypress","#volume,#tempo_type,#volume_max,#tempo_length,#tempo_length_option",function(){oneshotVolume("change")}),$("body").on("change keyup keypress","[id^=volume],[id^=tech_tempo_type],[id^=tech_volume_max],[id^=tech_tempo_length],[id^=tech_tempo_length_option]",function(){techoneshotVolume("change")}),$("#tech_title").on("change",function(){var e=$(this).find("option:selected");$("#tech_type").val(e.text()),$("#tech_type").attr("rel",e.val())})});