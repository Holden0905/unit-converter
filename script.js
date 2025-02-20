document.addEventListener('DOMContentLoaded', () => {
    const inputValue = document.getElementById('inputValue');
    const convertBtn = document.getElementById('convertBtn');
    const lengthResult = document.getElementById('lengthResult');
    const volumeResult = document.getElementById('volumeResult');
    const massResult = document.getElementById('massResult');

    // Conversion functions
    const metersToFeet = meters => (meters * 3.281).toFixed(3);
    const feetToMeters = feet => (feet / 3.281).toFixed(3);
    const litersToGallons = liters => (liters * 0.264).toFixed(3);
    const gallonsToLiters = gallons => (gallons * 3.785).toFixed(3);
    const kilosToPounds = kilos => (kilos * 2.205).toFixed(3);
    const poundsToKilos = pounds => (pounds / 2.205).toFixed(3);

    const performConversion = () => {
        const value = parseFloat(inputValue.value);
        
        // Length conversion
        lengthResult.textContent = 
            `${value} meters = ${metersToFeet(value)} feet | ${value} feet = ${feetToMeters(value)} meters`;
        
        // Volume conversion
        volumeResult.textContent = 
            `${value} liters = ${litersToGallons(value)} gallons | ${value} gallons = ${gallonsToLiters(value)} liters`;
        
        // Mass conversion
        massResult.textContent = 
            `${value} kilos = ${kilosToPounds(value)} pounds | ${value} pounds = ${poundsToKilos(value)} kilos`;
    };

    // Initial conversion
    performConversion();

    // Event listeners
    convertBtn.addEventListener('click', performConversion);
    inputValue.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') performConversion();
    });
}); 