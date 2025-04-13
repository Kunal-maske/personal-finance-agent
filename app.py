import os
from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv
from llm_helper import get_groq_llm, generate_financial_plan, get_financial_research

# Load environment variables
load_dotenv()

app = Flask(__name__)

@app.route('/')
def index():
    """Render the main page."""
    return render_template('index.html')

@app.route('/generate_plan', methods=['POST'])
def create_financial_plan():
    """Generate a financial plan based on user input."""
    # Get user input from form
    financial_goals = request.form.get('financial_goals', '')
    current_situation = request.form.get('current_situation', '')
    
    if not financial_goals or not current_situation:
        return jsonify({'error': 'Please provide both financial goals and current situation'}), 400
    
    try:
        # Initialize the LLM
        llm = get_groq_llm()
        
        # Generate financial plan
        plan = generate_financial_plan(financial_goals, current_situation, llm)
        
        return jsonify({'plan': plan})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/research', methods=['POST'])
def research():
    """Perform financial research based on user input."""
    # Get user input from form
    query = request.form.get('query', '')
    
    if not query:
        return jsonify({'error': 'Please provide a research query'}), 400
    
    try:
        # Initialize the LLM
        llm = get_groq_llm()
        
        # Get research results
        results = get_financial_research(query, llm)
        
        return jsonify({'research': results})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    # Check if API keys are available
    if not os.environ.get('GROQ_API_KEY'):
        print("Warning: GROQ_API_KEY not found in environment variables. Please set it in the .env file.")
    
    debug_mode = os.environ.get('FLASK_ENV') == 'development'
    app.run(debug=debug_mode)