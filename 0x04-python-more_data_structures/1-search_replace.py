 #!/usr/bin/python3

def search_replace(my_list, search, replace):
    """
    replaces all occurances of search with replace
    """
    n_list = my_list
    for idx, item in enumerate(n_list):
        if item == search:
            n_list[idx] = replace
    return (n_list)
