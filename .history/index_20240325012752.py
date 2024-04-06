import ctypes
import mmap

buf = mmap.mmap(-1, mmap.PAGESIZE, mmap.MAP_ANONYMOUS | mmap.PROT_READ | mmap.PROT_WRITE | mmap.PROT_EXEC)

ftype = ctypes.CFUNCTYPE(ctypes.c_int, ctypes.c_int)
fpointer = ctypes.c_void_p.from_buffer(buf)

f = ftype(ctypes.addressof(fpointer))

buf.write(
    b'\x8b\xc7'  # mov eax, edi
    b'\x83\xc0\x01'  # add eax, 1
    b'\xc3'  # ret
)

print(buf)
