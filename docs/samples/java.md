# Java

## Import Depedencies
### Maven
Add the repository
```   
<repositories>
    <repository>
        <id>jitpack.io</id>
	<url>https://jitpack.io</url>
    </repository>
</repositories>
```
Add the dependency
```
<dependency>
    <groupId>com.github.mcjp78</groupId>
    <artifactId>ATPay-Java-Client</artifactId>
    <version>1.0</version>
</dependency>	
```
### Gradle
Add the jitpack repository service.
```
allprojects {
    repositories {
        maven { url 'https://jitpack.io' }
    }
}
```
Add the dependency

`implementation 'com.github.mcjp78:ATPay-Java-Client:1.0'`

## Create Order
<<< docs/assets/snippets/example/java/order-create.java

