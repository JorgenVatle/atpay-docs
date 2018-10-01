# Java

## Setup
#### Maven
Add the repository
```xml
<repositories>
    <repository>
        <id>jitpack.io</id>
	<url>https://jitpack.io</url>
    </repository>
</repositories>
```
Add the ATPay Java Client to your dependencies.
```xml
<dependency>
    <groupId>com.github.mcjp78</groupId>
    <artifactId>ATPay-Java-Client</artifactId>
    <version>1.0</version>
</dependency>	
```
#### Gradle
Add the JitPack repository service.
```gradle
allprojects {
    repositories {
        maven { url 'https://jitpack.io' }
    }
}
```

Add the dependency
```gradle
implementation 'com.github.mcjp78:ATPay-Java-Client:1.0'
```

## Create Order
<<< docs/assets/snippets/example/java/order-create.java

