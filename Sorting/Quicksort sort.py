def partition(arr, left, right):
    i = left-1
    key = arr[right]

    for j in range(left, right):
        if arr[j] < key:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i+1], arr[right] = arr[right], arr[i+1]
    return(i+1)


def quick_sort(arr, left, right):
    if left < right:
        key_index = partition(arr, left, right)
        quick_sort(arr, left, key_index-1)
        quick_sort(arr, key_index+1, right)


library_num = [124, 235, 456, 123, 756, 476, 285, 998, 379, 108]
print('\nInitial array:', library_num)
quick_sort(library_num, 0, len(library_num)-1)
print('\nSorted array:', library_num, '\n')