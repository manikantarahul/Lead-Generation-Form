const express=require ('express')
const cors=require('cors')
const axios=require('axios')
const port=1323
const app=express()

app.use(cors())
app.use(express.json())

const N8N_WEBHOOK_URL = 'https://manikantarahul.app.n8n.cloud/webhook/90306533-7176-49cc-94ad-007e96f56918'

// Form endpoint
// http://localhost:1323/submit-form
app.post('/submit-form', async (req, res) => {
  try {
    const formData = req.body;

    // Forward to n8n
    const response = await axios.post(N8N_WEBHOOK_URL, formData);

    res.status(200).json({ message: 'Form data forwarded to n8n.', n8nResponse: response.data });
  } catch (error) {
    console.error('Error forwarding to n8n:', error.message);
    res.status(500).json({ message: 'Failed to forward data to n8n.', error: error.message });
  }
});


app.listen(port,()=>{
    console.log("server started")
})