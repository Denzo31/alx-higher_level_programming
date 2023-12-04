#include <Python.h>
#include <object.h>
#include <listobject.h>

void print_python_list_info(Pyobject *p)
{
	long int size = Pylist_Size(p);
	int i;
	PylistObject *obj = (PylistObject *)p;

	printf("[*] Size of the Python List = %li\n", size);
	printf("[*] Allocated = %li\n". obj->allocated);
	for (i = 0; i < size; i++)
		printf("Element %i; %s\n", i, Py_TYPE(obj->ob_item[i])->tp_name);
}
