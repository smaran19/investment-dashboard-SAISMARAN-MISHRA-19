const ctx = document.getElementById('portfolioChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Adani Enterprises', 'Adani Ports', 'Apollo Hospitals', 'Asian Paints', 'Axis Bank', 'Bajaj Auto', 'Bajaj Finance', 'Bajaj Finserv', 'Bharti Airtel', 'BPCL', 'Britannia', 'Cipla', 'Coal India', "Divi's Labs", "Dr. Reddy's", 'Eicher Motors', 'Grasim', 'HCL Tech', 'HDFC Bank', 'HDFC Life', 'Hero MotoCorp', 'Hindalco', 'HUL', 'ICICI Bank', 'IndusInd Bank', 'Infosys', 'ITC', 'JSW Steel', 'Kotak Mahindra Bank', 'LTIMindtree', 'L&T', 'M&M', 'Maruti Suzuki', 'Nestle India', 'NTPC', 'ONGC', 'Power Grid', 'Reliance', 'SBI', 'SBI Life', 'Sun Pharma', 'Tata Consumer', 'Tata Motors', 'Tata Steel', 'TCS', 'Tech Mahindra', 'Titan', 'UPL', 'Wipro', 'Zomato'],
    datasets: [
      {
        label: 'Invested (₹)',
        data: [82673, 82574, 25245, 85640, 21939, 46187, 69233, 45218, 22007, 45684, 39232, 22736, 81809, 68212, 39277, 66256, 91704, 76072, 83804, 66259, 22184, 96410, 26655, 75252, 66942, 78328, 62676, 63751, 96616, 43333, 33819, 53133, 86552, 95044, 44738, 56317, 79736, 94587, 53511, 70070, 32754, 70155, 24834, 38661, 67865, 94042, 50782, 26180, 34713, 85019],
        backgroundColor: '#0077b6'
      },
      {
        label: 'Current Value (₹)',
        data: [117416, 78019, 37246, 106599, 26363, 52998, 70511, 65896, 26151, 63394, 41947, 24045, 114157, 82883, 53352, 86938, 88511, 95527, 93419, 71752, 28785, 117948, 28514, 77363, 94144, 110734, 70415, 58116, 105511, 60562, 39355, 70708, 128513, 118636, 64721, 71437, 89887, 131559, 59236, 64388, 32532, 81864, 35702, 39600, 84552, 127520, 54243, 38818, 37943, 114998],
        backgroundColor: '#90e0ef'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Investment vs Current Value (NIFTY 50)'
      },
      legend: {
        position: 'bottom'
      }
    },
    scales: {
      x: {
        display: false
      }
    }
  }
});
