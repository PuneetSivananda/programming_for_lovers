class WrapperClass:
    def check_is_less_than(func):
        def wrapper(arg1, arg2):   
            if(arg1>arg2):
                return func(arg1, arg2)
            else:
                return func(arg2, arg1)
        return wrapper
    
wc = WrapperClass
@wc.check_is_less_than
def div(a,b):
	return a/b

print(div(10, 4))
print(div(4, 10))