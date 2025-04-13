from langchain_groq.chat_models import ChatGroq
from langchain.schema import HumanMessage, AIMessage, SystemMessage
import os 
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

def get_groq_llm(model_name="llama-3.1-8b-instant"):
    """Get the Groq LLM model directly from LangChain."""
    return ChatGroq(
        groq_api_key=os.environ.get('GROQ_API_KEY'),
        model=model_name
    )

def get_financial_research(query, llm=None):
    """Perform financial research based on the user's query."""
    if llm is None:
        llm = get_groq_llm()
    
    system_message = SystemMessage(content="""
    You are a world-class financial researcher. Given a user's financial goals and current financial situation,
    analyze and provide detailed, personalized financial advice and investment strategies.
    Focus on practical, actionable advice that takes into account the user's specific circumstances.
    """)
    
    user_message = HumanMessage(content=query)
    
    messages = [system_message, user_message]
    response = llm.invoke(messages)
    
    return response.content

def generate_financial_plan(financial_goals, current_situation, llm=None):
    """Generate a personalized financial plan based on user input."""
    if llm is None:
        llm = get_groq_llm()
    
    system_message = SystemMessage(content="""
    You are a senior financial planner with expertise in personal finance management, investment strategies, and financial planning.
    Create a comprehensive, personalized financial plan that includes:
    1. Budget recommendations
    2. Savings strategies
    3. Investment advice tailored to the user's goals and risk tolerance
    4. Debt management strategies (if applicable)
    5. Long-term planning considerations
    
    Provide specific, actionable advice that is realistic and achievable based on the user's current situation.
    Format your response with clear headings and bullet points for readability.
    """)
    
    query = f"""
    Financial Goals:
    {financial_goals}
    
    Current Financial Situation:
    {current_situation}
    
    Please create a comprehensive financial plan based on this information.
    """
    
    user_message = HumanMessage(content=query)
    
    messages = [system_message, user_message]
    response = llm.invoke(messages)
    
    return response.content