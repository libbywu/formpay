//站內付 demo展示用，不合用請重新寫


$(document).ready(function(){

    //menu btn
    $("#creditCardBtn").click(function () {
        $("#creditCardInfo").slideDown();
        $("#creditCard_installment").hide();
        $("#creditCard_discount").hide();
        $("#virtualInfo").hide();
    })
    $("#creditCardBtn_installment").click(function(){
        $("#creditCardInfo").slideDown();
        $("#creditCard_installment").delay("slow").slideDown();
        $("#creditCard_discount").hide();
        $("#virtualInfo").hide();
    })
    $("#creditCardBtn_discount").click(function () {
        $("#creditCardInfo").slideDown();
        $("#creditCard_installment").hide();
        $("#creditCard_discount").delay("slow").slideDown();
        $("#virtualInfo").slideUp();
    })


    $("#virtualBtn").click(function(){
        $("#virtualInfo").slideToggle();
        $("#creditCardInfo").slideUp();
    })

    //發票資訊開合

    $('input[name="invoiceBtn"]').change(function () {
        if ($(this).attr('id') == 'cloud') {
            $(this).closest(".check_block").siblings(".check_block").removeClass("active");
            $(this).parent().parent().addClass("active");
            $('.cloud_group').slideDown();
            $('.lovecode_group').slideUp();
            $('.company_group').slideUp();
        }
    });
    $('input[name="invoiceBtn"]').change(function () {
        if ($(this).attr('id') == 'donate') {
            $(this).closest(".check_block").siblings(".check_block").removeClass("active");
            $(this).parent().parent().addClass("active");
            $('.lovecode_group').slideDown();
            $('.company_group').slideUp();
            $('.cloud_group').slideUp();
        }
    });

    $('input[name="invoiceBtn"]').change(function () {
        if ($(this).attr('id') == 'b2c') {
            $(this).closest(".check_block").siblings(".check_block").removeClass("active");
            $(this).parent().parent().addClass("active");
            $('.company_group').slideDown();
            $('.lovecode_group').slideUp();
            $('.cloud_group').slideUp();
        }
    });



    //雲端發票
    $("input[id='cloudinvoice_1']").click(function () {
        if ($(this).is(':checked')) {
            $(".invoiceMobile").slideDown();
            $(".invoiceNaturalPerson").slideUp();
        }
    });
    $("input[id='cloudinvoice_2'").click(function () {
        if ($(this).is(':checked')) {
            $(".invoiceNaturalPerson").slideDown();
            $(".invoiceMobile").slideUp();
        }
    });
    











});