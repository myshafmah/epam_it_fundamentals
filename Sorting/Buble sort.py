from itertools import count


def buble_sort(arr):
    count = 0
    need_iteration = True
    while need_iteration == True:
        need_iteration = False
        for i in range(len(arr)):
            for j in range(0, len(arr)-i-1):
                if arr[j] > arr[j+1]:
                    arr[j], arr[j + 1] = arr[j+1], arr[j]
                    need_iteration = True
                    count += 1
    print('the number of permutations is ', count)


library_num = [124, 235, 456, 123, 756, 476, 285, 998, 379, 108]
print('initial array ', library_num)
buble_sort(library_num)
print('sorted array is ', library_num)
