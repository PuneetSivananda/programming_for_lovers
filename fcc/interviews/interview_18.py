# Write a python script to organize letters in words more reasonably(using above string) - in an alphabetical order
str1 = "Beautiful Code Is Better Than Ugly"

# print("sample")

list_of_letter = list(set(str1))

print(sorted(list_of_letter))

def check_is_less_than(func, arg1, arg2)
    if(arg1>arg2):
        return func(ar1, arg2)
    else:
        return func(arg2, arg1)
 

# @check_is_less_than
# def div(a,b):
# 	return a/b



	
from time import sleep
import threading
import json
import queue

filenames = ['first_name.txt', 'last_name.txt', 'age.txt', 'country.txt', 'projects.txt',
             'hobbies.txt', 'salary.txt', 'job_title.txt', 'email.txt', 'education.txt',
            ]


with open('data.json', 'w') as f:
    pass


def dumping(dictionary):
    with open('data.json', 'w') as file:
        json.dump(dictionary, file)


def read_file(filename):
    global to_dump, tmp
    with open(f'data/{filename}', 'r') as file:
        for line in file:
            lock.acquire()
            q.put((filename[:-4], line.strip()))
            lock.release()	
	
def process_task():
    global tmp
    while True:
        try:
            lock.acquire()
            item = q.get()
        except queue.Empty:
            continue
        else:
            tmp.append(item)
            q.task_done()
            if len(tmp) == 10:
                to_dump.append(dict(tmp))
                tmp.clear()
            lock.release()


to_dump = []
q = queue.Queue(maxsize=1)
tmp = []

lock = threading.Lock()
threads = [threading.Thread(target=read_file, args=(filename,)) for filename in filenames]

waiter = threading.Thread(target=process_task, daemon=True)
waiter.start()

for thread in threads:
    thread.start()


for thread in threads:
    thread.join()

dumping(to_dump)