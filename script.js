$(document).ready(function () {
    
 
    const indianMobileRegex = /^(?:(?:\+|00)91[\s-]?)?[0]?([6-9]\d{9})$/;

    $('#phoneForm').on('submit', function (e) {
        e.preventDefault(); 

        const rawInput = $('#mobileNumber').val().trim();
        const $result = $('#result');

      
        $result.removeClass('hidden bg-red-100 text-red-700 bg-green-100 text-green-700');

        
        if (!rawInput) {
            $result
                .addClass('bg-red-100 text-red-700')
                .text('⚠️ Please enter a mobile number.')
                .removeClass('hidden');
            return;
        }

        
        const match = rawInput.match(indianMobileRegex);

        if (match) {
            const cleanNumber = match[1]; 
            $result
                .addClass('bg-green-100 text-green-700')
                .html(`✅ Valid Indian Mobile Number!<br><span class="font-normal text-xs text-gray-600">Standardized: +91 ${cleanNumber}</span>`)
                .removeClass('hidden');
        } else {
            $result
                .addClass('bg-red-100 text-red-700')
                .text('❌ Invalid Indian Mobile Number. Must be 10 digits starting with 6, 7, 8, or 9.')
                .removeClass('hidden');
        }
    });

    
    $('#mobileNumber').on('input', function () {
        $('#result').addClass('hidden'); 
    });
});