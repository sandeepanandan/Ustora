$(document).ready(function () {
    $('.razorpay').click(function (e){
        e.preventDefault();
        var fname = $("[name='firstName']").val();
        var lname = $('[name="lastName"]').val();
        var email = $('[name="email"]').val();
        var address = $('[name="address"]').val();
        var country = $('[name="country"]').val(); 
        var state= $('[name="state"]').val();
        var pincode = $('[name="zip"]').val();
        if (fname == '' || lname == '' || email == '' || address == '' ||country  == '' || state == '' || pincode == '')
        {
            swal("All Fields Are Mandatory",'error');
            return false;
        }
        else
        {
            var options = {
                "key": "rzp_test_gHjQSl8uEHyrkC", // Enter the Key ID generated from the Dashboard
                "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "Acme Corp",
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "handler": function (response){
                    alert(response.razorpay_payment_id);
                    alert(response.razorpay_order_id);
                    alert(response.razorpay_signature)
                },
                "prefill": {
                    "name": "Gaurav Kumar",
                    "email": "gaurav.kumar@example.com",
                    "contact": "9999999999"
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };
            var rzp1 = new Razorpay(options);
            rzp1.open();
    

        }
        
    });
});