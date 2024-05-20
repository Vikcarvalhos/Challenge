import hashlib
from datetime import datetime

def generate_md5_hash(user_input):
    current_time = int(datetime.now().timestamp())

    combined_string = f"{user_input} {current_time}"

    md5_hash = hashlib.md5(combined_string.encode()).hexdigest()

    return f"{current_time} {md5_hash}"
