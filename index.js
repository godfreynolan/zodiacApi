const express = require('express');
const app = express();

const horoscopes = [
  {
    sign: 'aries',
    title: 'You\'ll feel particularly in touch with your emotions when you awaken this morning, dearest Aries, as the moon migrates into sensitive Cancer while cozying up to passionate Mars'
  },
  {
    sign: 'taurus',
    title: 'Your heart, mind, and body will work together today, dear Taurus, as the moon creeps into Cancer while forming a cosmic alliance with passionate Mars.'
  },
  {
    sign: 'gemini',
    title: 'Try to hit the ground running when you awaken this morning, dear Gemini, as the Cancer moon and passionate Mars form a sweet alliance overhead.'
  },
  {
    sign: 'cancer',
    title: 'The moon creeps into your sign early this morning, dear Cancer, cozying up to passionate Mars and firing you up for a great day'
  },
  {
    sign: 'leo',
    title: 'You\'ll be in a private yet motivated headspace this morning, dearest Leo, as the moon migrates into Cancer while cozying up to passionate Mars'
  },
  {
    sign: 'virgo',
    title: 'Your compassionate nature will feel elevated this morning, dear Virgo, as the moon migrates into sensitive Cancer and the sector of your chart that governs community'
  },
  {
    sign: 'libra',
    title: 'You\'ll feel strong in your sense of authority without abandoning compassion today, dear Libra, as the moon migrates into Cancer and your solar tenth house'
  },
  {
    sign: 'scorpio',
    title: 'The stars will nudge you to pursue your dreams this morning, sweet Scorpion, as the Cancer moon cozies up to passionate Mars'
  },
  {
    sign: 'sagittarius',
    title: 'yada yada yada'
  },
  {
    sign: 'capricorn',
    title: 'Personal accountability will be the key to changing your life this morning, dear Archer, as the Cancer moon aligns with passionate Mars'
  },
  {
    sign: 'aquarius',
    title: 'A sweet yet passionate energy will linger in the air when you awaken this morning, dearest Capricorn, as the moon migrates into Cancer while forming a cosmic union to fiery Mars'
  },
  {
    sign: 'pisces',
    title: 'The stars will ask you to express yourself boldly and freely this morning, dearest fishy, as the moon migrates into Cancer and your solar fifth house'
  }
];

// GET request to get all horoscopes
app.get('/horoscopes', (req, res) => {
  res.json(horoscopes);
});

// GET request to get a single horoscope by sign
app.get('/horoscopes/:sign', (req, res) => {
  const sign = req.params.sign.toLowerCase();
  const horoscope = horoscopes.find(h => h.sign === sign);
  if (!horoscope) {
    res.status(404).json({ error: `Horoscope for sign '${sign}' not found` });
  } else {
    res.json(horoscope);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
