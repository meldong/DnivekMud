import clr
clr.AddReference("assets/Dnivek.Xyz")

from Dnivek.Xyz import MyClass

my_instance1 = MyClass()
my_instance2 = MyClass()
my_instance3 = MyClass()

print(MyClass.GetInstanceCount())  # Output: 3

# namespace Dnivek.Xyz
# {
#     public class MyClass
#     {
#         private static int instanceCount = 0;
#         public MyClass()
#         {
#             instanceCount++;
#         }
#         public static int GetInstanceCount()
#         {
#             return instanceCount;
#         }
#     }
# }


# from HelloWorldLibrary import HelloWorld
# HelloWorld.SayHello()

# using System;
# namespace HelloWorldLibrary
# {
#     public class HelloWorld
#     {
#         public static void SayHello()
#         {
#             Console.WriteLine("Hello, World!");
#         }
#     }
# }
